import React from 'react'
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { FAB } from 'react-native-elements'

import Header from '../components/Header'
import CourseCard from '../components/CourseCard'
import RobotHappy from '../icons/RobotHappy'
import { LastViewedCoursesProps } from '../types/props'
import {
  COLORS,
  COURSES,
  RELATED_COURSES,
  ICourseData,
  getRandomColor
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
    color     : '#FFF',
    fontFamily: 'Mukta_400Regular',
    fontSize  : 30
  },
  textPurple: {
    color     : COLORS.PURPLE,
    fontFamily: 'Mukta_700Bold',
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
    color       : '#FFF',
    fontFamily  : 'Mukta_400Regular',
    fontSize    : 24,
    marginBottom: 16,
    marginTop   : 24
  }
})

// Mockup version
const LastViewedCourses = ({
  navigation,
  route: {
    params: {
      firstTime,
      ids
    }
  }
}: LastViewedCoursesProps) => {
  const [selectedCourses] = React.useState<ICourseData[]>(
    COURSES.filter(c => ids.includes(c.id))
  )

  // TODO: implemented a way to logout globally
  const logoutAlert = React.useCallback(() => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          onPress: () => navigation.navigate('SignInEmail'),
          text   : 'Yes',
          style  : 'default'
        },
        {
          onPress: () => {},
          text   : 'No',
          style  : 'cancel'
        }
      ],
      { cancelable: true }
    )
  }, [])

  return (
    <SafeAreaView style={classes.container}>
      <StatusBar barStyle='default' />
      <Header logout={logoutAlert}/>
      <View style={classes.lastViewedCoursesContainer}>
        <View style={classes.title}>
          <Text style={classes.textWhite}>
            {firstTime ? 'Last viewed ' : 'Selected '}
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
          onPress={() => {}}
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
            />
          )}
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 0 }}
        />
        <FAB
          color={COLORS.RED}
          icon={
            <RobotHappy
              color='#FFF'
              name='robot-happy'
              size={21}
            />
          }
          onPress={() => {}}
          placement='right'
        />
      </View>
    </SafeAreaView>
  )
}

export default LastViewedCourses
