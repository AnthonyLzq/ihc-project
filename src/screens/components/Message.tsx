import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { MessageProps } from '../../types/props'
import { COLORS, FONTS } from '../../utils'

const classes = StyleSheet.create({
  container: {
    maxHeight   : 155,
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
    borderTopEndRadius     : 12
  },
  text: {
    color     : COLORS.WHITE,
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
      <Text style={classes.text}>{content.text}</Text>
    </TouchableOpacity>
  )
}

export default Message
