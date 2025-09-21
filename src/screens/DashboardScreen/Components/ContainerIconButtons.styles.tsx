import { Theme } from '@/types/theme.type'
import { StyleSheet } from 'react-native'

export const containerIconButtonsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: theme.spacings.xxLarge,
      flex: 1,
      alignItems: 'flex-start',
      marginTop: '10%',
    },
  })
