import React from 'react'
import AppLoading from 'expo-app-loading'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from '@expo-google-fonts/play'
import screens from './screenViews'
import { fontResources } from './utils'

const Stack = createStackNavigator()

const App = () => {
  const [fondLoaded] = useFonts(fontResources)

  if (!fondLoaded)
    return <AppLoading />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {screens.map(({ name, component }) => <Stack.Screen key={name} name={name} component={component} />)}
    </Stack.Navigator>
  )
}

export default App
