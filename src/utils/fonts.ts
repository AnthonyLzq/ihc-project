import { Play_400Regular, Play_700Bold } from '@expo-google-fonts/play'
import { Padauk_400Regular, Padauk_700Bold } from '@expo-google-fonts/padauk'
import { Mukta_400Regular, Mukta_700Bold } from '@expo-google-fonts/mukta'

const FONTS = {
  MAIN: {
    REGULAR: 'Padauk_400Regular',
    BOLD: 'Padauk_700Bold'
  },
  SECONDARY: {
    REGULAR: 'Mukta_400Regular',
    BOLD: 'Mukta_700Bold'
  },
  INPUT: {
    REGULAR: 'Catamaran'
  },
  LOGO: {
    REGULAR: 'Play_400Regular',
    BOLD: 'Play_700Bold'
  }
}

export const fontResources = {
  Catamaran: require('../../assets/fonts/Catamaran-VariableFont_wght.ttf'),
  'robot-happy': require('../../assets/fonts/robot-happy.ttf'),
  Padauk_400Regular,
  Padauk_700Bold,
  Play_400Regular,
  Play_700Bold,
  Mukta_400Regular,
  Mukta_700Bold
}

export default FONTS