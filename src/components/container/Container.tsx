import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { containerStyles } from './Container.styles'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  const theme = useTheme()
  const styles = containerStyles(theme)

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Container
