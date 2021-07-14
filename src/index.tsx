import React from 'react'
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import firebase from 'firebase/app';
import 'firebase/auth';

import { FB_CONFIG } from './keys'
import store from './store'
import App from './App'

const rrfConfig = {
  userProfile: 'users'
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

firebase.initializeApp(FB_CONFIG)

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
