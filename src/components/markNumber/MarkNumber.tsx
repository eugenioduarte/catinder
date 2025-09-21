import Text from '@/components/text/Text'
import { useTheme } from '@/hooks/useTheme'
import { Theme } from '@/types/theme.type'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type MarkNumberProps = {
  text: string
}
const MarkNumber = ({ text }: MarkNumberProps) => {
  const theme = useTheme()
  const styles = markNumberStyles(theme)

  return (
    <View style={styles.container}>
      <Text variant="bigText" style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

export default MarkNumber

const markNumberStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 120,
    },
    text: {
      color: theme.colors.grey,
    },
  })
