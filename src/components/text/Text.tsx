import { typography } from '@/constants/theme'
import React from 'react'
import {
  StyleProp,
  Text as TextDefault,
  TextProps,
  TextStyle,
} from 'react-native'

type Variant = keyof typeof typography

type Props = TextProps & {
  children: React.ReactNode
  variant?: Variant
  style?: StyleProp<TextStyle>
}

const Text = ({ children, testID, variant, style, ...rest }: Props) => {
  let childText = ''
  if (typeof children === 'string' || typeof children === 'number') {
    childText = String(children)
  }

  const finalTestID = testID || `text-${childText}`
  const variantStyle = variant ? typography[variant] : undefined
  return (
    <TextDefault testID={finalTestID} style={[variantStyle, style]} {...rest}>
      {children}
    </TextDefault>
  )
}

export default Text
