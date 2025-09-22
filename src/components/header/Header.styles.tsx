import { Theme } from '@/types/theme.type'
import { StyleSheet } from 'react-native'

export const headerStyles = (theme: Theme, selected?: boolean) =>
  StyleSheet.create({
    container: {
      width: 84,
      height: 28,
      marginBottom: theme.spacings.xLarge,
      backgroundColor: theme.colors.grey_2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: theme.border.radiusLarge,
      paddingHorizontal: 2,
      marginTop: theme.spacings.medium,
    },
    iconButton: {
      width: 40,
      height: 24,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: selected ? theme.colors.background : 'transparent',
    },
  })
