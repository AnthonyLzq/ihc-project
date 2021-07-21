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

import { CourseDetailProps } from '../types/props'
import { Header } from '../components'
import { RobotHappy } from '../icons'
import {
  COLORS,
  COURSES,
  FONTS,
  RELATED_COURSES,
  ICourseData,
  logout
} from '../utils'

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK
  },
  topicsContainer: {
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopEndRadius  : 26,
    borderTopStartRadius: 26,
    height              : '88%',
    // paddingEnd          : 32,
    paddingStart        : 32,
    paddingTop          : 32
  },
  title: {
    color       : COLORS.PURPLE,
    fontFamily  : FONTS.SECONDARY.BOLD,
    fontSize    : 30,
    marginBottom: 10
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
    marginLeft   : 18
  },
  topicName: {
    color       : COLORS.WHITE,
    fontFamily  : FONTS.SECONDARY.REGULAR,
    fontSize    : 18,
  }
})

interface Topic {
  name: string
  id  : string
}

const CourseDetail: React.FC<CourseDetailProps> = props => {
  const {
    navigation,
    route
  } = props
  const [course, setCourse] = React.useState('')
  const [mainTopics, setMainTopics] = React.useState<Topic[]>([])
  const [suggestTopics, setSuggestTopics] = React.useState<Topic[]>([])

  React.useEffect(() => {
    const courseData = [...COURSES, ...RELATED_COURSES]
      .find(c => c.id === (route?.params?.id)) as ICourseData

    setCourse(courseData.course)
    setMainTopics(
      courseData.topics
        .slice(0, 6)
        .map((e, index) => ({ name: e, id: `${index}` }))
    )
    setSuggestTopics(
      courseData.topics
        .slice(6)
        .map((e, index) => ({ name: e, id: `${index}` }))
    )
  }, [])

  return (
    <SafeAreaView style={classes.container}>
      <StatusBar barStyle='default' />
      <Header navigation={navigation}/>
      <View style={classes.topicsContainer}>
        <Text style={classes.title}>{course}</Text>
        <Text style={classes.subtitle}>Topics</Text>
        <FlatList
          data={mainTopics}
          renderItem={({ item: { name, id }}) => (
            <TouchableOpacity
              key={id}
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
              <Text style={classes.topicName}>{name}</Text>
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
          data={suggestTopics}
          renderItem={({ item: { name, id } }) => (
            <TouchableOpacity
              key={id}
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
              <Text style={classes.topicName}>{name}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          style={{
            flexGrow : 0,
            maxHeight: 180
          }}
        />
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

