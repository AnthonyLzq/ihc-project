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
import { Icon, FAB } from 'react-native-elements'

import { CourseDetailProps, Syllabus } from '../types/props'
import { Header } from '../components'
import { RobotHappy } from '../icons'
import {
  COLORS,
  FONTS,
} from '../utils'
import { useAppSelector } from '../hooks'

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK
  },
  topicsContainer: {
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopEndRadius  : 26,
    borderTopStartRadius: 26,
    height              : '88%',
    paddingEnd          : 32,
    paddingStart        : 32,
    paddingTop          : 32
  },
  title: {
    color       : COLORS.PURPLE,
    fontFamily  : FONTS.SECONDARY.BOLD,
    fontSize    : 30,
    marginBottom: 10,
    textTransform: 'capitalize'
  },
  subtitle: {
    color       : COLORS.WHITE,
    fontFamily  : FONTS.SECONDARY.REGULAR,
    fontSize    : 24,
    marginBottom: 10
  },
  flatList: {
    maxHeight: 220
  },
  topicView: {
    alignItems   : 'center',
    flexDirection: 'row',
    marginBottom : 8,
    marginLeft   : 18,
    maxWidth     : '80%'
  },
  topicName: {
    color       : COLORS.WHITE,
    fontFamily  : FONTS.SECONDARY.REGULAR,
    fontSize    : 18
  }
})

const CourseDetail: React.FC<CourseDetailProps> = props => {
  const {
    navigation,
    route
  } = props
  const allCourses = useAppSelector(state => state.syllabusReducer.allSyllabus.data) as Syllabus[]
  const courseData = allCourses.find(course => course.generalInfo.course.code === (route?.params?.id))
  const mainTopics = courseData ? courseData.analyticProgram.map(topic => topic) : []
  const suggestTopics = courseData ? courseData.analyticProgram.map(topic => topic) : []

  return (
    <SafeAreaView style={classes.container}>
      <StatusBar barStyle='default' />
      <Header navigation={navigation}/>
      <View style={classes.topicsContainer}>
        {
          courseData &&
          <>
            <Text style={classes.title}>{courseData.generalInfo.course.name}</Text>
            <Text style={classes.subtitle}>Topics</Text>
            <FlatList
              keyExtractor={(item, index) => `${item.topic}-${index}`}
              data={mainTopics}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.topic}
                  onPress={() => navigation.navigate('Chat')}
                  style={classes.topicView}
                >
                  <Icon
                    color={COLORS.WHITE}
                    name='file-search-outline'
                    type='material-community'
                    size={16}
                    style={{
                      marginRight: 16
                    }}
                  />
                  <Text style={classes.topicName}>{item.topic}</Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              style={{
                flexGrow : 0,
                maxHeight: 220
              }}
            />
            <Text style={[classes.subtitle, { marginTop: 17 }]}>
              It might interest you
            </Text>
            <FlatList
              keyExtractor={(item, index) => `${item.topic}-${index}`}
              data={suggestTopics}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.topic}
                  onPress={() => navigation.navigate('Chat')}
                  style={classes.topicView}
                >
                  <Icon
                    color={COLORS.WHITE}
                    name='file-search-outline'
                    type='material-community'
                    size={16}
                    style={{
                      marginRight: 16
                    }}
                  />
                  <Text style={classes.topicName}>{item.topic}</Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              style={{
                flexGrow : 0,
                maxHeight: 180
              }}
            />
          </>
        }
      </View>
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
    </SafeAreaView>
  )
}

export default CourseDetail

