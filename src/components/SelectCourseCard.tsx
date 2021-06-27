import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements'

import { SelectCourseCardProps } from '../types/props'
import { COLORS } from '../utils'

const wHeight = Dimensions.get('window').height
const wWidth = Dimensions.get('window').width

const classes = StyleSheet.create({
  container: {
    borderRadius  : 12,
    justifyContent: 'center',
    height        : 0.275 * wHeight,
    marginBottom  : 32,
    shadowColor   : 'rgba(0, 0, 0, 0.25)',
    shadowOffset  : {
      width : 0,
      height: 1
    },
    shadowRadius: 4,
    width       : 0.36 * wWidth
  },
  textWhite: {
    color     : '#FFF',
    fontFamily: 'Mukta_400Regular',
    textAlign : 'center'
  }
})

const SelectCourseCard = ({
  available,
  course,
  icon,
  iconType,
  id,
  onPress,
  style: { marginRight } = { marginRight: 0 }
}: SelectCourseCardProps) => {
  const [isSelected, setIsPressed] = React.useState(false)
  const [backgroundColor, setBackgroundColor] = React.useState(
    COLORS.MAIN_BLACK
  )
  const firstRender = React.useRef(true)

  const toggleIsPressed = (): void => {
    if (available || isSelected)
      setIsPressed(!isSelected)
  }

  React.useEffect(() => {
    if (!firstRender.current) {
      if (isSelected) {
        setBackgroundColor(COLORS.GREEN)
        onPress(isSelected, id)
      } else {
        setBackgroundColor(COLORS.MAIN_BLACK)
        onPress(isSelected, id)
      }
    } else
      firstRender.current = false
  }, [isSelected])

  return (
    <TouchableOpacity
      onPress={toggleIsPressed}
      style={[
        classes.container,
        {
          backgroundColor,
          marginRight
        }
      ]}
    >
      <Icon
        color='#FFF'
        iconStyle={{
          height: 41,
          width : 25
        }}
        name={icon}
        type={iconType}
      />
      <Text style={classes.textWhite}>{course}</Text>
    </TouchableOpacity>
  )
}

export default SelectCourseCard
