import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { FAB } from 'react-native-elements'

import { AllCoursesProps } from '../types/props'
import { CourseCard, Header } from '../components'
import { RobotHappy } from '../icons'
import {
  COURSES,
  COLORS,
  FONTS,
  logout,
  ICourseData,
  getRandomColor
} from '../utils'

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK
  },
  allCourses: {
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopEndRadius  : 26,
    borderTopStartRadius: 26,
    height              : '88%',
    paddingEnd          : 32,
    paddingStart        : 32,
    paddingTop          : 32
  },
  title: {
    flexDirection: 'row',
    marginBottom : 18
  },
  textWhite: {
    color     : COLORS.WHITE,
    fontFamily: FONTS.SECONDARY.REGULAR,
    fontSize  : 30
  },
  textPurple: {
    color     : COLORS.PURPLE,
    fontFamily: FONTS.SECONDARY.BOLD,
    fontSize  : 30
  }
})

const AllCourses: React.FC<AllCoursesProps> = props => {
  const {
    navigation,
    route
  } = props

  const [courses] = React.useState<ICourseData[]>(
    COURSES.filter(c => route?.params?.ids.includes(c.id))
  )

  return (
    <SafeAreaView style={classes.container}>
      <StatusBar barStyle='default' />
      <Header logout={(() => logout(navigation))}/>
      <View style={classes.allCourses}>
        <View style={classes.title}>
          <Text style={classes.textWhite}>All my </Text>
          <Text style={classes.textPurple}>courses</Text>
        </View>
        <FlatList
          data={courses}
          renderItem={({ item: { course, icon, iconType, id }, index }) => (
            <CourseCard
              key={id}
              style={{
                color       : getRandomColor(),
                marginBottom: index !== courses.length - 1 ? 16 : 0
              }}
              course={course}
              icon={icon}
              iconType={iconType}
              onPress={() => navigation.navigate('CourseDetail', { id })}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 0 }}
        />
        <FAB
          color={COLORS.RED}
          icon={
            <RobotHappy
              color={COLORS.WHITE}
              name='robot-happy'
              size={21}
            />
          }
          onPress={() => navigation.navigate('Chat')}
          placement='right'
        />
      </View>
    </SafeAreaView>
  )
}

export default AllCourses

