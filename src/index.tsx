import React from 'react'
import { registerRootComponent } from 'expo'
import App from './App'

const AppContainer = () => {
  return (
    <App />
  )
}

export default registerRootComponent(AppContainer)
