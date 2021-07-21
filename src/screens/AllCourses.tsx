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
  COLORS,
  FONTS,
  getRandomColor,
  reduceTextToSize
} from '../utils'
import { useAppSelector } from '../hooks'

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

  const allCourses = useAppSelector(state => state.syllabusReducer.allSyllabus.data)
  const userData = useAppSelector(state => state.userReducer.signIn.data)
  const selectedCourses = allCourses ? allCourses.filter(course => userData?.selectedCourses.includes(course.generalInfo.course.code)) : []

  return (
    <SafeAreaView style={classes.container}>
      <StatusBar barStyle='default' />
      <Header navigation={navigation}/>
      <View style={classes.allCourses}>
        <View style={classes.title}>
          <Text style={classes.textWhite}>All my </Text>
          <Text style={classes.textPurple}>courses</Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => `${item.generalInfo.course.code}-${index}`}
          data={selectedCourses}
          renderItem={({ item, index }) => (
            <CourseCard
              key={item.generalInfo.course.code}
              style={{
                color       : getRandomColor(),
                marginBottom: index !== selectedCourses.length - 1 ? 16 : 0
              }}
              course={reduceTextToSize(item.generalInfo.course.name)}
              icon={item.icon ? item.icon.split('/')[1] : 'language-java'}
              iconType={item.icon ? item.icon.split('/')[0] : 'material-community'}
              onPress={() => navigation.navigate('CourseDetail', { id: item.generalInfo.course.code })}
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

