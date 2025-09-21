import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { loadingCardStyles } from './LoadingCard.styles'

const LoadingCard = () => {
  const theme = useTheme()
  const styles = loadingCardStyles(theme)
  return (
    <View style={styles.container} testID="loading-card-container">
      <ActivityIndicator
        size="large"
        testID="loading-card-indicator"
        color={theme.colors.red}
        style={styles.activeIndicator}
      />
    </View>
  )
}

export default LoadingCard
