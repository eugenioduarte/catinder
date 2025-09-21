import Container from '@/components/container/Container'
import { Snackbar } from '@/components/snackBar/SnackBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { registerRootComponent } from 'expo'
import React from 'react'
import 'react-native-reanimated'
import Navigation from './src/navigation/Navigation'
import './src/services/i18n'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Navigation />
        <Snackbar />
      </Container>
    </QueryClientProvider>
  )
}

registerRootComponent(App)
