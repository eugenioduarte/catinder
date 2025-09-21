import { TextStyle } from 'react-native'

export const Colors = {
  light: {
    text: '#434141',
    background: '#FBFAFF',
    grey: '#BFBFC0',
    grey_2: '#E3E3E4',
    red: '#EC537E',
    white: '#FFFFFF',
  },
}

export const border = {
  size: 1,
  radiusSmall: 8,
  radiusMedium: 16,
  radiusLarge: 28,
  radiusFull: 9999,
}

export const spacings = {
  xTiny: 2,
  xSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
  xxLarge: 48,
}

export const font = {
  nunitoSansBold: 'NunitoSans-Bold',
}

export const typography: Record<string, TextStyle> = {
  nunitoBold16: {
    fontFamily: font.nunitoSansBold,
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 16 * 1.25,
    letterSpacing: 0,
  },
  nunitoBold8: {
    fontFamily: font.nunitoSansBold,
    fontWeight: '700',
    fontSize: 8,
    fontStyle: 'normal',
    lineHeight: 8 * 1.25,
    letterSpacing: 0,
  },
  nunitoSemiBold16: {
    fontFamily: font.nunitoSansBold,
    fontWeight: '600',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 16 * 1.25,
    letterSpacing: 0,
  },
  nunitoMedium16: {
    fontFamily: font.nunitoSansBold,
    fontWeight: '500',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 16 * 1.25,
    letterSpacing: 0,
  },
  nunitoRegular14: {
    fontFamily: font.nunitoSansBold,
    fontWeight: '400',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 14 * 1.25,
    letterSpacing: 0,
  },
  nunitoBold32: {
    fontFamily: font.nunitoSansBold,
    fontWeight: '700',
    fontSize: 32,
    fontStyle: 'normal',
    lineHeight: 32 * 1.25,
    letterSpacing: 0,
  },
  nunitoBold126: {
    fontFamily: font.nunitoSansBold,
    fontWeight: '700',
    fontSize: 126,
    fontStyle: 'normal',
    lineHeight: 126, // 100%
    letterSpacing: 0,
  },
}
