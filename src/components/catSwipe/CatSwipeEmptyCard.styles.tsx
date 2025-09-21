import { sizes } from '@/constants/sizes'
import { Theme } from '@/types/theme.type'
import { StyleSheet } from 'react-native'

export const catSwipeEmptyCardStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      position: 'absolute',
      width: sizes.WIDTH_SCREEN * 0.85,
      height: sizes.HEIGHT_SCREEN * 0.5,
      borderRadius: theme.border.radiusMedium,
      overflow: 'hidden',
      backgroundColor: theme.colors.background,
      shadowColor: theme.colors.grey,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.15,
      shadowRadius: theme.border.radiusSmall * 2,
      elevation: 5,
      alignItems: 'center',
    },
    endText: {
      ...theme.typography.nunitoSemiBold16,
      color: theme.colors.text,
      textAlign: 'center',
      padding: theme.spacings.large,
    },
  })
