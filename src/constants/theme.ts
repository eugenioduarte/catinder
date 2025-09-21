import { TextStyle } from 'react-native'

export const Colors = {
  light: {
    text: '#434141',
    background: '#FBFAFF',
    grey: '#BFBFC0',
    red: '#EC537E',
  },
}

export const border = {
  size: 1,
  radius: 8,
}

export const spacings = {
  xTiny: 2,
  xSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
}

export const font = {
  light: 'FT Base Light',
  regular: 'FT Base Regular',
  medium: 'FT Base Medium',
  bold: 'FT Base Bold',
}

export const typography: Record<string, TextStyle> = {
  bigText: {
    fontFamily: font.bold,
    fontSize: 126,
    fontWeight: '700',
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: font.medium,
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.15,
    lineHeight: 20,
  },
}
