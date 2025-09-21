import Container from '@/components/Container'
import { registerRootComponent } from 'expo'
import React from 'react'
import 'react-native-reanimated'
import Navigation from './src/navigation/Navigation'

export default function App() {
  return (
    <Container>
      <Navigation />
    </Container>
  )
}

registerRootComponent(App)
