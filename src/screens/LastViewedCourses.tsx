import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { FAB } from 'react-native-elements'

import { LastViewedCoursesProps } from '../types/props'
import { Header, CourseCard } from '../components'
import RobotHappy from '../icons/RobotHappy'
import {
  COLORS,
  COURSES,
  RELATED_COURSES,
  FONTS,
  ICourseData,
  getRandomColor,
  logout
} from '../utils'

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK
  },
  lastViewedCoursesContainer: {
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
  },
  flatListSelectedCourses: {
    maxHeight: 200
  },
  text: {
    fontSize: 14
  },
  allCourses: {
    alignItems: 'flex-end',
    marginTop : 25
  },
  textAllCourses: {
    fontSize: 16
  },
  mightInterest: {
    color       : COLORS.WHITE,
    fontFamily  : FONTS.SECONDARY.REGULAR,
    fontSize    : 24,
    marginBottom: 16,
    marginTop   : 24
  }
})

// Mockup version
const LastViewedCourses: React.FC<LastViewedCoursesProps> = props => {
  const {
    navigation,
    route
  } = props
  const [selectedCourses] = React.useState<ICourseData[]>(
    COURSES.filter(c => route?.params?.ids.includes(c.id))
  )

  return (
    <SafeAreaView style={classes.container}>
      <StatusBar barStyle='default' />
      <Header logout={(() => logout(navigation))}/>
      <View style={classes.lastViewedCoursesContainer}>
        <View style={classes.title}>
          <Text style={classes.textWhite}>
            {route?.params?.firstTime ? 'Last viewed ' : 'Selected '}
          </Text>
          <Text style={classes.textPurple}>courses</Text>
        </View>
        <FlatList
          data={selectedCourses}
          renderItem={({ item: { course, icon, iconType, id }, index }) => (
            <CourseCard
              key={id}
              style={{
                color       : getRandomColor(),
                marginBottom: index !== selectedCourses.length - 1 ? 16 : 0
              }}
              course={course}
              icon={icon}
              iconType={iconType}
              onPress={() => navigation.navigate('CourseDetail', { id })}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={[
            classes.flatListSelectedCourses,
            { flexGrow: 0 }
          ]}
        />
        <TouchableOpacity
          style={classes.allCourses}
          onPress={() => navigation.navigate('AllCourses', { ids: route?.params?.ids || [] })}
        >
          <Text style={[classes.textPurple, classes.textAllCourses]}>
            See all my courses
          </Text>
        </TouchableOpacity>
        <Text style={classes.mightInterest}>It might interest you</Text>
        <FlatList
          data={RELATED_COURSES}
          renderItem={({ item: { course, icon, iconType, id }, index }) => (
            <CourseCard
              key={id}
              style={{
                color       : getRandomColor(),
                marginBottom: index !== selectedCourses.length - 1 ? 16 : 0
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

export default LastViewedCourses
