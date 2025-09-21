import { Theme } from '@/types/theme.type'
import { StyleSheet } from 'react-native'

export const iconButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      width: theme.spacings.xLarge * 1.7,
      height: theme.spacings.xLarge * 1.7,
      borderRadius: theme.border.radiusLarge,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: theme.colors.grey,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: theme.border.radiusLarge * 0.57,
      elevation: 6,
    },
  })
