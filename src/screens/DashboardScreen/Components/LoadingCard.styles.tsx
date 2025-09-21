import { Theme } from '@/types/theme.type'
import { StyleSheet } from 'react-native'

export const loadingCardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeIndicator: {
      backgroundColor: theme.colors.white,
      padding: theme.spacings.large,
      borderRadius: 50,
    },
  })
