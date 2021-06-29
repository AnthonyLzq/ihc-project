import COLORS from './colors'
import { fontResources, FONTS  } from './fonts'
import logout from './logout'
interface ICourseData {
  course  : string
  icon    : string
  iconType: string
  id      : string
  topics  : string[]
}

const COURSES: ICourseData[] = [
  {
    course  : 'Integral Calculus',
    icon    : 'math-integral',
    iconType: 'material-community',
    id      : '1',
    topics  : [
      'Antiderivative/Indefinite integral',
      'Simplest rules',
      'Arbitrary constant of integration',
      'Cavalieri\'s quadrature formula',
      'Fundamental theorem of calculus',
      'Integration by parts',
      'Inverse chain rule method',
      'Integration by substitution',
      'Differentiation under the integral sign',
      'Trigonometric substitution'
    ]
  },
  {
    course  : 'Electrostatics',
    icon    : 'flash',
    iconType: 'material-community',
    id      : '2',
    topics  : [
      'Electric charge',
      'Coulomb\'s law',
      'Electric field',
      'Potential due to a point charge',
      'Potential due to a system of charges',
      'Relation between field and potential',
      'Electric dipole',
      'Electric flux',
      'Gauss\'s law and',
      'The parallel plate capacitor',
    ]
  },
  {
    course  : 'Java Programming',
    icon    : 'language-java',
    iconType: 'material-community',
    id      : '3',
    topics  : [
      'Basic Syntax',
      'Identifiers',
      'Modifiers',
      'Variables',
      'Arrays',
      'Enums',
      'Objects',
      'Classes',
      'Interfaces',
      'Constructors'
    ]
  },
  {
    course  : 'Organic Chemistry',
    icon    : 'chemistry',
    iconType: 'simple-line-icon',
    id      : '4',
    topics  : [
      'Structure and bonding',
      'Resonance and acid-base chemistry',
      'Alkanes, cycloalkanes, and functional groups',
      'Stereochemistry',
      'Substitution and elimination reactions',
      'Alkenes and alkynes',
      'Alcohols, ethers, epoxides, sulfides',
      'Conjugated systems and pericyclic reactions',
      'Aromatic compounds',
      'Aldehydes and ketones'
    ]
  },
  {
    course  : 'Statistics',
    icon    : 'bar-chart',
    iconType: 'material',
    id      : '5',
    topics  : [
      'Descriptive and Inferential Statistics',
      'Sampling Methods',
      'Types of Variables',
      'Independent and Dependent Variables',
      'Variable Measurement Scales',
      'Frequency Distributions and Cumulative Frequency Distributions',
      'Bar Graphs and Pie Charts',
      'Histograms and Stem & Leaf Plots',
      'Arithmetic Mean for Samples and Populations',
      'Central Tendency: Mean, Median, and Mode'
    ]
  },
  {
    course  : 'Human-Computer Interaction',
    icon    : 'computer',
    iconType: 'material',
    id      : '6',
    topics  : [
      'Input',
      'Models',
      'Research',
      'Ubiquitous',
      'Ideas',
      'Methods',
      'Design',
      'Physical/Virtual',
      'Attention',
      'Social'
    ]
  }
]

const RELATED_COURSES: ICourseData[] = [
  {
    course  : 'JavaScript Programming',
    icon    : 'language-javascript',
    iconType: 'material-community',
    id      : '7',
    topics  : [
      'Basic syntax',
      'Variables',
      'Data types',
      'Interaction',
      'Basic operations',
      'Conditionals',
      'Logical operators',
      'Nullish coalescing operator',
      'Loops',
      'Functions'
    ]
  },
  {
    course  : 'Discrete Mathematics',
    icon    : 'graph-outline',
    iconType: 'material-community',
    id      : '8',
    topics  : [
      'Theoretical computer science',
      'Information theory',
      'Logic',
      'Set theory',
      'Combinatorics',
      'Graph theory',
      'Probability',
      'Number theory',
      'Algebraic structures',
      'Calculus of finite differences, discrete calculus or discrete analysis'
    ]
  }
]

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++)
    color += letters[Math.floor(Math.random() * 16)]

  return color
}

export {
  COLORS,
  FONTS,
  COURSES,
  RELATED_COURSES,
  ICourseData,
  getRandomColor,
  fontResources,
  logout
}
