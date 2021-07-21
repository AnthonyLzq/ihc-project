import React from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { MessageProps } from '../../types/props'
import { COLORS, FONTS } from '../../utils'

const classes = StyleSheet.create({
  container: {
    maxWidth    : '80%',
    padding     : 8,
    marginBottom: 12
  },
  messageFromBot: {
    alignSelf              : 'flex-start',
    backgroundColor        : COLORS.BOT_MESSAGE,
    borderBottomEndRadius  : 12,
    borderBottomStartRadius: 12,
    borderTopStartRadius   : 0,
    borderTopEndRadius     : 12
  },
  messageFromUser: {
    alignSelf              : 'flex-end',
    backgroundColor        : COLORS.PURPLE,
    borderBottomEndRadius  : 12,
    borderBottomStartRadius: 12,
    borderTopStartRadius   : 12,
    borderTopEndRadius     : 0
  },
  text: {
    color     : COLORS.WHITE,
    fontFamily: FONTS.SECONDARY.REGULAR
  },
  link: {
    color     : COLORS.LINK,
    fontFamily: FONTS.SECONDARY.REGULAR
  }
})

const Message: React.FC<MessageProps> = props => {
  const { content, date, fromBot } = props

  return (
    <TouchableOpacity style={[
      classes.container,
      fromBot ? classes.messageFromBot : classes.messageFromUser
    ]}>
      {
        content.message ?
        <Text style={classes.text}>{content.message}</Text> :
        <>
          <Text style={classes.text}>{content.resource?.title}</Text>
          <Text style={classes.link} onPress={() => Linking.openURL(content.resource?.link || '')}>{content.resource?.link}</Text>
        </>
      }
    </TouchableOpacity>
  )
}

export default Message
