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
  View
} from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { CustomInput, Header } from '../components'
import { Message } from './components'
import { RobotHappy } from '../icons'
import { COLORS, FONTS, ChatMessage, searchCriteria } from '../utils'
import { GeneralScreenProps } from '../types/props'

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
    marginBottom  : 4,
    width         : '100%'
  },
  searchCriteria: {
    borderRadius : 4,
    paddingBottom: 3,
    paddingEnd   : 12,
    paddingStart : 12,
    paddingTop   : 3,
  },
  textSearchCriteria: {
    fontFamily: FONTS.INPUT.REGULAR,
    fontSize  : 10
  },
  input: {
    position     : 'absolute',
    paddingBottom: 32,
    paddingEnd   : 32,
    paddingStart : 32,
    width        : '100%'
  }
})

const Chat: React.FC<GeneralScreenProps> = props => {
  const { navigation } = props
  const [keyboardHeight, setKeyboardHeight] = React.useState(0)
  const [isKeyBoardOpen, setIsKeyboardOpen] = React.useState(false)
  const [criteria, setCriteria] = React.useState(searchCriteria)
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
          icon='mic'
          iconLeft={false}
          style={{
            color               : COLORS.WHITE,
            marginBottom        : 0,
            placeHolder         : 'What topic are you looking for?',
            placeHolderTextColor: COLORS.LEAD,
            size                : 14
          }}
        />
      </View>
    </View>
  )
}

export default Chat
