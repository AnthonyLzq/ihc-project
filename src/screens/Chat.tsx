import React from 'react'
import {
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardEvent,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Audio } from 'expo-av';
import { readAsStringAsync, EncodingType } from 'expo-file-system'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { CustomInput, Header } from '../components'
import { Message } from './components'
import { RobotHappy } from '../icons'

import { COLORS, FONTS, ChatMessage, searchCriteria, Post } from '../utils'
import { ApiResponse, ChatProps, BotResource } from '../types/props'
import { useAppDispatch, useAppSelector } from '../hooks';
import * as slices from '../slices';

const wHeight = Dimensions.get('window').height
// const wWidth = Dimensions.get('window').width

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK,
  },
  chatContainer: {
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopEndRadius  : 26,
    borderTopStartRadius: 26,
    height              : 0.88*wHeight,
    paddingEnd          : 32,
    paddingStart        : 32,
    paddingTop          : 32
  },
  titleContainer: {
    alignItems   : 'center',
    flexDirection: 'row',
    marginBottom : 16
  },
  title: {
    color       : COLORS.WHITE,
    fontFamily  : FONTS.SECONDARY.REGULAR,
    fontSize    : 30,
    marginBottom: 10
  },
  searchCriteriaContainer: {
    justifyContent: 'space-between',
    flexDirection : 'row',
    marginBottom  : 5,
    width         : '100%'
  },
  searchCriteria: {
    borderRadius : 4,
    paddingTop: 3,
    paddingBottom: 3,
    paddingStart: 12,
    paddingEnd: 12,
  },
  textSearchCriteria: {
    fontFamily: FONTS.INPUT.REGULAR,
    fontSize  : 12
  },
  input: {
    position     : 'absolute',
    paddingBottom: 32,
    paddingEnd   : 32,
    paddingStart : 32,
    width        : '100%'
  }
})

const recordingOptions = {
  android: {
      extension: '.wav',
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
      sampleRate: 44100,
      numberOfChannels: 2,
      bitRate: 128000,
  },
  ios: {
      extension: '.wav',
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
      sampleRate: 44100,
      numberOfChannels: 1,
      bitRate: 128000,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
  },
};

const botMessages: { [key: string]: string } = {
  all: 'Maybe these links can help you :D',
  blog: 'I found these nice blogs :0',
  tutorial: 'These tutorials are really good B)',
  paper: 'I found these interesting papers!',
  book: 'You could read one of these books :D',
  video: 'These videos are well explained',
  nores: "I couldn't find any link related :("
}

const Chat: React.FC<ChatProps> = props => {
  const { navigation, route } = props
  const dispatch = useAppDispatch()
  const [keyboardHeight, setKeyboardHeight] = React.useState(0)
  const [isKeyBoardOpen, setIsKeyboardOpen] = React.useState(false)
  const [selectedCriteria, setSelectedCriteria] = React.useState<string>('')
  const [message, setMessage] = React.useState<string>('')
  const [recording, setRecording] = React.useState<Audio.Recording>()
  const userData = useAppSelector(state => state.userReducer.signIn.data)
  const [messages, setMessages] = React.useState<ChatMessage[]>([{
    id     : uuid(),
    content: {
      message: 'How can I help you?'
    },
    date   : new Date(),
    fromBot: true
  }])

  const onKeyboardDidShow = (e: KeyboardEvent): void => {
    setKeyboardHeight(e.endCoordinates.height)
    setIsKeyboardOpen(true)
  }
  const onKeyboardDidHide = (): void => {
    setKeyboardHeight(0)
    setIsKeyboardOpen(false)
  }

  const sendMessage = (message: string) => {
    const keyWord = selectedCriteria.length === 0 ? 'all' : selectedCriteria
    const query = message

    let newMessages = [
      ...messages,
      {
        id: uuid(),
        fromBot: false,
        content: {
          message
        },
        date   : new Date()
      }
    ]

    setMessages(newMessages)
    setMessage('')
    sendMessageAsync(keyWord, query, newMessages)
  }

  const sendMessageAsync = async (keyWord: string, query: string, currentMessages: ChatMessage[]) => {
    try {
      dispatch(slices.getChatResource())
      const response: ApiResponse<BotResource[]> = await Post('/search', {
        args: {
          keyWord,
          query
        }
      })

      dispatch(slices.getChatResourceSuccess())
      if (response.message.length !== 0)
        currentMessages = [
          ...currentMessages,
          {
            id: uuid(),
            fromBot: true,
            content: {
              message: botMessages[keyWord]
            },
            date   : new Date()
          },
          ...response.message.map(resource => ({
            id: uuid(),
            fromBot: true,
            content: {
              resource
            },
            date   : new Date()
          }))
        ]
      else
        currentMessages = [
          ...currentMessages,
          {
            id: uuid(),
            fromBot: true,
            content: {
              message: botMessages['nores']
            },
            date   : new Date()
          }
        ]
      
      setMessages(currentMessages)
    } catch (error) {
      dispatch(slices.getChatResourceError())
      const message = error?.response?.data?.message || error?.message
      console.log(message)
      alert(message)
      currentMessages = [
        ...currentMessages,
        {
          id: uuid(),
          fromBot: true,
          content: {
            message: botMessages['nores']
          },
          date   : new Date()
        }
      ]
      setMessages(currentMessages)
    }
  }

  const startRecording = async () => {
    try {
      console.log('requesting permissions...')

      await Audio.requestPermissionsAsync()
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      })

      console.log('starting recording...')
      const recording = new Audio.Recording()

      await recording.prepareToRecordAsync(recordingOptions)
      await recording.startAsync()

      setRecording(recording)
      console.log('recording started')
    } catch (error) {
      console.error(error);
      alert('Failed to start recording');
    }
  }

  const stopRecording = async () => {
    console.log('stopping recording..')

    setRecording(undefined)

    await recording?.stopAndUnloadAsync()
    const uri = recording?.getURI()

    console.log('recording stopped and stored at', uri);

    if (uri) {
      try {
        const audio = await readAsStringAsync(uri, {
          encoding: EncodingType.Base64
        })

        dispatch(slices.getChatResource())
        const response: ApiResponse<string> = await Post('/speech', {
          args: {
            base64: audio
          }
        })

        dispatch(slices.getChatResource())
        console.log(response);
        sendMessage(response.message)
      } catch (error) {
        dispatch(slices.getChatResourceError())
        console.log(error);
        console.log(error.message);
        const newMessages = [
          ...messages,
          {
            id: uuid(),
            fromBot: true,
            content: {
              message: "I couldn't hear you well, please try again"
            },
            date   : new Date()
          }
        ]

        setMessages(newMessages)
      }
    }
  }

  const handleOnChangeMessage = (text: string) => setMessage(text)

  React.useEffect(() => {
    if (route && route.params)
      sendMessage(route.params.topic)

    return () => setRecording(undefined)
  }, [])

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)

    return (): void => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide)
    }
  }, [])

  const onSearchCriteriaPress = (criteria: string) =>
    criteria === selectedCriteria ? setSelectedCriteria('') : setSelectedCriteria(criteria)

  return (
    <View style={classes.container}>
      <StatusBar barStyle='default' />
      <Header navigation={navigation} />
      <View style={classes.chatContainer}>
        <View style={classes.titleContainer}>
          <RobotHappy
            color={COLORS.WHITE}
            name='robot-happy'
            size={25}
            style={{
              marginBottom: 10,
              marginRight : 16
            }}
          />
          <Text style={classes.title}>Hello {userData ? userData.name : ''}</Text>
        </View>
        <SafeAreaView style={{ paddingBottom: isKeyBoardOpen ? keyboardHeight + 195 : 185 }}>
          <FlatList
            keyExtractor={(item, index) => `${item.id}-${index}`}
            data={messages}
            renderItem={({ item: { id, content, date, fromBot } }) => (
              <Message
                content={content}
                date={date}
                fromBot={fromBot}
                key={id}
              />
            )}
          />
        </SafeAreaView>
      </View>
      <View
        style={[
          classes.input,
          { bottom: isKeyBoardOpen ? keyboardHeight + 10 : 0 }
        ]}
      >
        <SafeAreaView style={classes.searchCriteriaContainer}>
          <FlatList
            keyExtractor={(item, index) => `${item}-${index}`}
            data={searchCriteria}
            horizontal
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={`${item}-${index}`}
                onPress={() => onSearchCriteriaPress(item)}
                style={[
                  classes.searchCriteria,
                  {
                    backgroundColor: selectedCriteria === item ? COLORS.RED : COLORS.MAIN_BLACK
                  }
                ]}
              >
                <Text
                  style={[
                    classes.textSearchCriteria,
                    {
                      fontWeight: selectedCriteria === item ? '700' : '400',
                      color     : selectedCriteria === item ? COLORS.WHITE : COLORS.LEAD
                    }
                  ]}
                >
                  #{item}
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{
              flexGrow      : 1,
              justifyContent: 'space-between'
            }}
          />
        </SafeAreaView>
        <CustomInput
          icon={message.length === 0 ? 'mic' : 'send'}
          iconLeft={false}
          style={{
            color               : COLORS.WHITE,
            marginBottom        : 0,
            placeHolder         : 'What topic are you looking for?',
            placeHolderTextColor: COLORS.LEAD,
            size                : 16
          }}
          value={message}
          onChangeText={handleOnChangeMessage}
          hasTouchableOpacity
          onPressIcon={message.length !== 0 && !recording ? () => sendMessage(message) : undefined}
          onPressInIcon={message.length === 0 && !recording ? () => startRecording() : undefined}
          onPressOutIcon={message.length === 0 && recording ? () => stopRecording() : undefined}
        />
      </View>
    </View>
  )
}

export default Chat
