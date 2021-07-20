import React from 'react'
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FB_CONFIG } from './keys'
import store from './store'
import App from './App'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance
}

firebase.initializeApp(FB_CONFIG)

/* 
  ignore logs for some cases:
  
  'Setting a timer for a long period of time...'
  (https://stackoverflow.com/questions/44603362/setting-a-timer-for-a-long-period-of-time-i-e-multiple-minutes)
*/
LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const AppContainer = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </ReactReduxFirebaseProvider>
  </Provider>
)

export default registerRootComponent(AppContainer)
