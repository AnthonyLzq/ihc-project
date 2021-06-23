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

import Header from '../components/Header'
import SelectCourseCard from '../components/SelectCourseCard'
import CustomButton from '../components/CustomButton'
import { SelectCoursesProps } from '../types/props'
import { COLORS, COURSES } from '../utils'

const classes = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK
  },
  coursesContainer: {
    alignItems          : 'center',
    backgroundColor     : COLORS.SECOND_BLACK,
    borderTopEndRadius  : 26,
    borderTopStartRadius: 26,
    height              : '88%'
  },
  title: {
    flexDirection: 'row',
    marginTop    : 30
  },
  textWhite: {
    color     : '#FFF',
    fontFamily: 'Mukta_400Regular'
  },
  textPurple: {
    color     : COLORS.PURPLE,
    fontFamily: 'Mukta_700Bold'
  }
})

// Mockup version
const SelectCourses = ({ navigation }: SelectCoursesProps) => {
  const [nCourses, setNCourses] = React.useState(0)
  const [selectedCourses, setSelectedCourses] = React.useState<string[]>([])

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
          // TODO: navigate to the next screen
          onPress: () => navigation.navigate(
            'LastViewedCourses',
            {
              firstTime: true,
              ids      : selectedCourses
            }
          ),
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
      <Header logout={logoutAlert} />
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
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={COURSES}
          numColumns={2}
          renderItem={({ item: { id, course, icon, iconType }, index }) => (
            <SelectCourseCard
              available={nCourses < 5}
              key={id}
              course={course}
              icon={icon}
              id={id}
              iconType={iconType}
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
            marginBottom: 32,
            marginTop   : -1,
            titleSize   : 16
          }}
          disabled={nCourses < 3}
          icon={{
            color: '#FFF',
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

