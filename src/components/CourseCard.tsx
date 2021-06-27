import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

import { CourseCardProps } from '../types/props'
import { COURSES, ICourseData, FONTS } from '../utils'

const classes = StyleSheet.create({
  container: {
    alignItems    : 'center',
    borderRadius  : 12,
    flexDirection : 'row',
    height        : 72,
    justifyContent: 'space-between',
    paddingEnd    : 32,
    paddingStart  : 32
  },
  course: {
    alignItems   : 'center',
    flexDirection: 'row'
  },
  text: {
    color     : '#FFF',
    fontFamily: FONTS.SECONDARY.BOLD,
    fontSize  : 16,
    marginLeft: 16
  }
})

const CourseCard = ({
  course,
  icon,
  iconType,
  style: {
    color,
    marginBottom
  }
}: CourseCardProps) => {
  return (
    <View style={
      [
        classes.container,
        {
          backgroundColor: color,
          marginBottom
        }
      ]}>
      <View style={classes.course}>
        <Icon
          color='#FFF'
          size={25}
          name={icon}
          type={iconType}
        />
        <Text style={classes.text}>{course}</Text>
      </View>
      <TouchableOpacity>
        <Icon
            color='#FFF'
            size={25}
            name='arrow-forward'
            type='material'
          />
      </TouchableOpacity>
    </View>
  )
}

export default CourseCard
