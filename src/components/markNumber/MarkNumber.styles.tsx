import { Theme } from '@/types/theme.type'
import { StyleSheet } from 'react-native'

export const markNumberStyles = (theme: Theme) =>
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
