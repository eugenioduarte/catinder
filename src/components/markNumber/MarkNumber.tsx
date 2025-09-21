import Text from '@/components/text/Text'
import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { View } from 'react-native'
import { markNumberStyles } from './MarkNumber.styles'

type MarkNumberProps = {
  text: string
}

const MarkNumber = ({ text }: MarkNumberProps) => {
  const theme = useTheme()
  const styles = markNumberStyles(theme)

  return (
    <View style={styles.container} testID="mark-number">
      <Text variant="nunitoBold126" style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

export default MarkNumber
