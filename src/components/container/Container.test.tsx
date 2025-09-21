import { render } from '@testing-library/react-native'
import React from 'react'
import { Text } from 'react-native'
import Container from './Container'

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: ({ children }: any) => <>{children}</>,
  }
})

jest.mock('react-native-safe-area-context', () => {
  return {
    SafeAreaView: ({ children }: any) => <>{children}</>,
  }
})

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({ primaryColor: 'blue' }),
}))

jest.mock('./Container.styles', () => ({
  containerStyles: (theme: any) => ({
    container: { backgroundColor: theme.primaryColor },
    safeArea: { flex: 1 },
  }),
}))

describe('Container Component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Container>
        <Text>Test Child</Text>
      </Container>,
    )
    expect(getByText('Test Child')).toBeTruthy()
  })
})
