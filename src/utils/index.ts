import COLORS from './colors'
import FONTS from './fonts'
interface ICourseData {
  course  : string
  icon    : string
  iconType: string
  id      : string
}

const COURSES: ICourseData[] = [
  {
    course  : 'Integral Calculus',
    icon    : 'math-integral',
    iconType: 'material-community',
    id      : '1'
  },
  {
    course  : 'Electrostatics',
    icon    : 'flash',
    iconType: 'material-community',
    id      : '2'
  },
  {
    course  : 'Java Programming',
    icon    : 'language-java',
    iconType: 'material-community',
    id      : '3'
  },
  {
    course  : 'Organic Chemistry',
    icon    : 'chemistry',
    iconType: 'simple-line-icon',
    id      : '4'
  },
  {
    course  : 'Statistics',
    icon    : 'bar-chart',
    iconType: 'material',
    id      : '5'
  },
  {
    course  : 'Human-Computer Interaction',
    icon    : 'computer',
    iconType: 'material',
    id      : '6'
  }
]

const RELATED_COURSES: ICourseData[] = [
  {
    course  : 'JavaScript Programming',
    icon    : 'language-javascript',
    iconType: 'material-community',
    id      : '1'
  },
  {
    course  : 'Discrete Mathematics',
    icon    : 'graph-outline',
    iconType: 'material-community',
    id      : '2'
  }
]

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++)
    color += letters[Math.floor(Math.random() * 16)]

  return color
}

export * from './fonts'
export { COLORS, FONTS, COURSES, RELATED_COURSES, ICourseData, getRandomColor }
