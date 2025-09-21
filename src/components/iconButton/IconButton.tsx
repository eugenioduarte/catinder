import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import { iconButtonStyles } from './IconButton.styles'

type Props = TouchableOpacityProps & {
  children: React.ReactNode
  style?: ViewStyle | ViewStyle[]
}

const IconButton = ({ children, style, ...rest }: Props) => {
  const theme = useTheme()
  const styles = iconButtonStyles(theme)
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

export default IconButton
