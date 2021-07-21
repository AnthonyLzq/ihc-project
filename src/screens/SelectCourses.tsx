import React from 'react'
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { SelectCoursesProps } from '../types/props'
import {
  Header,
  SelectCourseCard,
  CustomButton
} from '../components'
import { COLORS, FONTS } from '../utils'
import { useAppDispatch, useAppSelector } from '../hooks'
import * as slices from '../slices'

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK
  },
  coursesContainer: {
    alignItems          : 'center',
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopEndRadius  : 26,
    borderTopStartRadius: 26,
    height              : '88%',
    padding             : 32
  },
  title: {
    flexDirection: 'row',
  },
  textWhite: {
    color     : COLORS.WHITE,
    fontFamily: FONTS.SECONDARY.REGULAR
  },
  textPurple: {
    color     : COLORS.PURPLE,
    fontFamily: FONTS.SECONDARY.BOLD
  }
})

// Mockup version
const SelectCourses: React.FC<SelectCoursesProps> = props => {
  const { navigation } = props
  const [nCourses, setNCourses] = React.useState(0)
  const [selectedCourses, setSelectedCourses] = React.useState<string[]>([])
  const dispatch = useAppDispatch()
  const userData = useAppSelector(state => state.userReducer.signIn.data)
  const courses = useAppSelector(state => state.syllabusReducer.initialSyllabus.data)

  const changeNCourses = (increaseOrDecrease: boolean, id: string): void => {
    if (increaseOrDecrease) {
      setNCourses(nCourses + 1)
      setSelectedCourses([...selectedCourses, id])
    } else {
      setNCourses(nCourses - 1)
      setSelectedCourses(selectedCourses.filter(c => c !== id))
    }
  }

  const continueAlert = () => {
    Alert.alert(
      'Continue',
      'Are you sure you want to continue? (This action can not be undone)',
      [
        {
          onPress: () => {
            dispatch(slices.selectSyllabus({
              id: userData?.id || '',
              selectedCourses,
              navigation
            }))
          },
          style  : 'default',
          text   : 'Yes'
        },
        {
          onPress: () => {},
          style  : 'cancel',
          text   : 'No'
        }
      ],
      { cancelable: true }
    )
  }

  React.useEffect(() => {
    dispatch(slices.getInitialSyllabus())
  }, [])

  return (
    <SafeAreaView style={classes.container}>
      <StatusBar barStyle='default' />
      <Header navigation={navigation} />
      <View style={classes.coursesContainer}>
        <View style={classes.title}>
          <Text style={classes.textWhite}>Select the </Text>
          <Text style={classes.textPurple}>courses </Text>
          <Text style={classes.textWhite}>you want to </Text>
          <Text style={classes.textPurple}>learn</Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={classes.textWhite}>{nCourses} / 5</Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => `${item.generalInfo.course.code}-${index}`}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={courses ? courses : []}
          numColumns={2}
          renderItem={({ item, index }) => (
            <SelectCourseCard
              available={nCourses < 5}
              id={item.generalInfo.course.code}
              key={`${item.generalInfo.course.code}-${index}`}
              course={item.generalInfo.course.name}
              icon={item.icon ? item.icon.split('/')[1] : 'language-java'}
              iconType={item.icon ? item.icon.split('/')[0] : 'material-community'}
              onPress={changeNCourses}
              style={{
                marginRight: index % 2 == 0 ? 32 : undefined
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        <CustomButton
          style={{
            color       : COLORS.PURPLE,
            titleSize   : 16
          }}
          disabled={nCourses < 3}
          icon={{
            color: COLORS.WHITE,
            name : 'chevron-right',
            size : 16,
            type : 'material'
          }}
          onPress={continueAlert}
          title='CONTINUE'
          hasIconRight={true}
        />
      </View>
    </SafeAreaView>
  )
}

export default SelectCourses

