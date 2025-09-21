import { sizes } from '@/constants/sizes'
import { Theme } from '@/types/theme.type'
import { StyleSheet } from 'react-native'

export const catSwipeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      position: 'absolute',
      width: sizes.WIDTH_SCREEN * 0.9,
      height: sizes.HEIGHT_SCREEN * 0.6,
      borderRadius: theme.border.radiusMedium,
      overflow: 'hidden',
      backgroundColor: theme.colors.background,
      shadowColor: theme.colors.grey,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.15,
      shadowRadius: theme.border.radiusSmall * 2,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    infoBar: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: theme.colors.white,
      width: '90%',
      height: 60,
      borderTopEndRadius: theme.border.radiusMedium,
      borderTopStartRadius: theme.border.radiusMedium,
      alignItems: 'flex-start',
      paddingHorizontal: theme.spacings.medium,
      paddingVertical: theme.spacings.small,
      alignSelf: 'center',
    },
    catOrigin: {
      marginTop: theme.spacings.xSmall,
      color: theme.colors.grey,
    },
    overlayText: {
      color: theme.colors.background,
      paddingHorizontal: theme.spacings.large,
      paddingVertical: theme.spacings.xSmall,
      borderRadius: theme.border.radiusSmall,
    },
    overlayRight: {
      position: 'absolute',
      top: theme.spacings.large,
      right: theme.spacings.large,
      backgroundColor: 'green',
    },
    overlayLeft: {
      position: 'absolute',
      top: theme.spacings.large,
      left: theme.spacings.large,
      backgroundColor: theme.colors.red,
    },
    catSwipeWrapper: {
      width: sizes.WIDTH_SCREEN,
      height: sizes.HEIGHT_SCREEN * 0.6,
    },
    infoBarTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  })
