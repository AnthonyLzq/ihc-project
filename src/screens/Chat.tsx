import React from 'react'
import {
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardEvent,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Audio } from 'expo-av';
import { getInfoAsync, readAsStringAsync, EncodingType } from 'expo-file-system'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { CustomInput, Header } from '../components'
import { Message } from './components'
import { RobotHappy } from '../icons'

import { COLORS, FONTS, ChatMessage, searchCriteria } from '../utils'
import { ChatProps } from '../types/props'
import axios from 'axios';
import { CLOUD_URL } from '../keys';

const wHeight = Dimensions.get('window').height
const wWidth = Dimensions.get('window').width

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
    paddingStart: 10,
    paddingEnd: 10,
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
      extension: '.m4a',
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

const Chat: React.FC<ChatProps> = props => {
  const { navigation } = props
  const [keyboardHeight, setKeyboardHeight] = React.useState(0)
  const [isKeyBoardOpen, setIsKeyboardOpen] = React.useState(false)
  const [criteria, setCriteria] = React.useState(searchCriteria)
  const [message, setMessage] = React.useState<string>('')
  const [recording, setRecording] = React.useState<Audio.Recording>()
  const [sound, setSound] = React.useState<Audio.Sound>()
  const [messages, setMessages] = React.useState<ChatMessage[]>([{
    id     : uuid(),
    content: {
      text     : 'How can I help you?',
      resources: []
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

  const sendMessage = () => {
    alert('send message')
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
      console.error('failed to start recording...', error);
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
        const info = await getInfoAsync(uri)
        const audio = await readAsStringAsync(uri, {
          encoding: EncodingType.Base64
        })

        console.log('audio64', audio);

        const response = await axios({
          url: CLOUD_URL,
          method: 'post',
          data: {
            config: {
              encoding: 'LINEAR16',
              languageCode: 'en-US',
              sampleRateHertz: 16000
            },
            audio: {
              content: audio
            }
          }
        })

        console.log(response.data);
      } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.response.data);
      }
    }
  }

  const handleOnChangeMessage = (text: string) => setMessage(text)

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow)
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide)

    return (): void => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide)
    }
  }, [])

  const onSearchCriteriaPress = (id: string) => {
    if (id === '1')
      setCriteria(
        criteria.map(c => {
          if (c.id === '1') c.selected = !c.selected

          if (criteria[0].selected && c.id !== '1') {
            c.selected = false
            c.disabled = true
          } else if (!criteria[0].selected) c.disabled = false

          return c
        })
      )
    else
      setCriteria(
        criteria.map(c => {
          if (c.id === id) c.selected = !c.selected

          return c
        })
      )
  }

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
          <Text style={classes.title}>Hello Bryan</Text>
        </View>
        <SafeAreaView>
          <FlatList
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
            data={searchCriteria}
            horizontal
            renderItem={({ item: { id, name, selected, disabled }}) => (
              <TouchableOpacity
                key={id}
                onPress={() => onSearchCriteriaPress(id)}
                style={[
                  classes.searchCriteria,
                  {
                    backgroundColor: selected ? COLORS.RED : COLORS.MAIN_BLACK
                  }
                ]}
                disabled={disabled}
              >
                <Text
                  style={[
                    classes.textSearchCriteria,
                    {
                      fontWeight: selected ? '700' : '400',
                      color     : selected ? COLORS.WHITE : COLORS.LEAD
                    }
                  ]}
                >
                  {name}
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
          // icon={message.length === 0 ? 'mic' : 'send'}
          icon='send'
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
          onPressIcon={sendMessage}
          // onPressIcon={message.length !== 0 && !recording ? sendMessage : undefined}
          // onPressInIcon={message.length === 0 && !recording ? () => startRecording() : undefined}
          // onPressOutIcon={message.length === 0 && recording ? () => stopRecording() : undefined}
        />
      </View>
    </View>
  )
}

export default Chat
