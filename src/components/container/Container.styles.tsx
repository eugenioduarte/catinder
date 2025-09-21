import { Theme } from '@/types/theme.type'

import { StyleSheet } from 'react-native'

export const containerStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    safeArea: {
      flex: 1,
    },
  })
