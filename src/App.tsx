import React from 'react'
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { registerRootComponent } from 'expo'
import * as ImagePicker from 'expo-image-picker'
import { ImageUri } from './interfaces/index'

const classes = StyleSheet.create({
  button: {
    backgroundColor: '#7952b3',
    marginTop      : 20,
    padding        : 7,
  },
  container: {
    alignItems     : 'center',
    backgroundColor: '#222',
    flex           : 1,
    justifyContent : 'center'
  },
  image: {
    height    : 200,
    marginTop : 20,
    resizeMode: 'contain',
    width     : 200
  },
  title: {
    color   : '#fff',
    fontSize: 25
  }
})

const App = () => {
  const [borderRadius, setBorderRadius] = React.useState(100)
  const [selectedImage, setSelectedImage] = React.useState<ImageUri>(
    { uri: null }
  )

  const openImagePicker = React.useCallback(async (): Promise<void> => {
    try {
      const libraryPermissionResults = await ImagePicker
        .requestMediaLibraryPermissionsAsync()

      if (!libraryPermissionResults.granted) {
        alert('Ok! See you!')
        return
      }

      const imageResult = await ImagePicker.launchImageLibraryAsync()

      if (imageResult.cancelled) {
        alert('Oh! You didn\'t pick any image!')
        return
      }

      setSelectedImage({ uri: imageResult.uri })
      setBorderRadius(Math.round((imageResult.height + imageResult.width)/2))
    } catch (error) {
      alert('Something went wrong')
    }
  }, [])

  const getImageUri = (): string => {
    if (selectedImage.uri)
      return selectedImage.uri

    return 'https://i.ibb.co/94pyf5C/ACECOMDW5s.png'
  }

  return (
    <View style={classes.container}>
      <Text style={classes.title}>ACECOM WD &lt;3!</Text>
      <Image
        source={{ uri: getImageUri() }}
        style={{
          ...classes.image,
          borderRadius
        }}
      />
      {/* <Button
        color='#000'
        title='Press me'
        onPress={() => Alert.alert('Hi!')}
      /> */}
      <TouchableOpacity
        onPress={() => openImagePicker()}
        style={classes.button}
      >
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default registerRootComponent(App)
