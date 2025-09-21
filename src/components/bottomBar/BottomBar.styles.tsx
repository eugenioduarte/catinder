import { Theme } from '@/types/theme.type'
import { StyleSheet } from 'react-native'

export const bottomBarStyles = (theme: Theme) =>
  StyleSheet.create({
    fabWrapper: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: theme.spacings.xLarge,
      alignItems: 'center',
      zIndex: 100,
      pointerEvents: 'box-none',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
      borderRadius: theme.border.radiusLarge,
      width: 156,
      height: 44,
      paddingTop: theme.spacings.medium,
      paddingBottom: theme.spacings.medium,
      paddingLeft: theme.spacings.large,
      paddingRight: theme.spacings.large,
      gap: theme.spacings.large,
      shadowColor: theme.colors.grey,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: theme.border.radiusMedium * 1,
      elevation: 8,
    },
    tab: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 20,
      width: 20,
    },
  })
