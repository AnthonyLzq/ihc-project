import React from 'react'
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import store from './store'
import App from './App'

const AppContainer = () => (
  <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
)

export default registerRootComponent(AppContainer)
