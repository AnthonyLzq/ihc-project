import { Alert } from 'react-native'
import { ExtendedFirebaseInstance } from 'react-redux-firebase';

import { Navigation, UserSignUpCredentials } from '../types/props'

export const signUpWithFirebase = async (firebase: ExtendedFirebaseInstance, data: UserSignUpCredentials, navigation: Navigation) => {
  try {
    const {
      email,
      password,
      names,
      lastnames
    } = data

    const userCreds = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error))


    firebase.auth().createUserWithEmailAndPassword(email, password).then(userCreds => {
      console.log(userCreds.user?.uid);
    }).catch(error => console.log(error.message))
  } catch (error) {
    console.log(error.message)
  }
}  

export const logoutAlert = (navigation: Navigation, firebase: ExtendedFirebaseInstance) => {
  Alert.alert(
    'Logout',
    'Are you sure you want to logout?',
    [
      {
        onPress: () => {
          (async () => {
            try {
              await firebase.auth().signOut()
              navigation.reset({
                index: 1,
                routes: [
                  { name: 'SignIn' },
                  { name: 'SignInEmail' }
                ]
              })
            } catch (error) {
              console.log(error)
              console.log(error.message)
              alert('There was an error trying to sign out')
            }
          })()
        },
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
}
