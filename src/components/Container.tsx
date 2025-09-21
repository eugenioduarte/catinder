import { useTheme } from '@/hooks/useTheme'
import { Theme } from '@/types/theme.type'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  const theme = useTheme()
  const styles = containerStyles(theme)

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </View>
  )
}

export default Container

const containerStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    safeArea: {
      flex: 1,
    },
  })
