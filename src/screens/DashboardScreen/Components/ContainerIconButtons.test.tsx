import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import ContainerIconButtons from './ContainerIconButtons'

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: { primary: '#000' },
    spacings: { medium: 8 },
  }),
}))

jest.mock('@/assets', () => {
  const { Text } = require('react-native')
  return {
    CloseIcon: ({ width, height }: any) => (
      <Text testID="close-icon">{`CloseIcon ${width}x${height}`}</Text>
    ),
    HeartIcon: ({ width, height }: any) => (
      <Text testID="heart-icon">{`HeartIcon ${width}x${height}`}</Text>
    ),
  }
})

jest.mock('@/components/iconButton/IconButton', () => {
  const { Text } = require('react-native')
  const IconButton = ({ children, onPress }: any) => (
    <Text testID="icon-button" onPress={onPress}>
      {children}
    </Text>
  )
  IconButton.displayName = 'IconButton'
  return IconButton
})

describe('ContainerIconButtons', () => {
  it('renders both buttons', () => {
    const { getByTestId } = render(
      <ContainerIconButtons handleLike={jest.fn()} />,
    )

    expect(getByTestId('close-icon')).toBeTruthy()
    expect(getByTestId('heart-icon')).toBeTruthy()
  })

  it('calls handleLike(false) when CloseIcon button is pressed', () => {
    const mockHandleLike = jest.fn()
    const { getAllByTestId } = render(
      <ContainerIconButtons handleLike={mockHandleLike} />,
    )

    fireEvent.press(getAllByTestId('icon-button')[0])
    expect(mockHandleLike).toHaveBeenCalledWith(false)
  })

  it('calls handleLike(true) when HeartIcon button is pressed', () => {
    const mockHandleLike = jest.fn()
    const { getAllByTestId } = render(
      <ContainerIconButtons handleLike={mockHandleLike} />,
    )

    fireEvent.press(getAllByTestId('icon-button')[1])
    expect(mockHandleLike).toHaveBeenCalledWith(true)
  })
})
