import { Alert } from 'react-native'

import { Navigation } from '../types/props'

const logoutAlert = (navigation: Navigation) => {
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
}

export default logoutAlert
