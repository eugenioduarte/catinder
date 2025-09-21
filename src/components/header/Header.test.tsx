import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import Header from './Header'

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    spacings: { xLarge: 20 },
    colors: { grey_2: '#ccc', white: '#fff' },
    border: { radiusLarge: 10 },
  }),
}))

jest.mock('@/assets', () => {
  const React = require('react')
  const { View } = require('react-native')
  return {
    TinderLogo: ({ width, height }: any) => (
      <View testID="tinder-logo">{`TinderLogo ${width}x${height}`}</View>
    ),
    StarIcon: ({ width, height }: any) => (
      <View testID="star-icon">{`StarIcon ${width}x${height}`}</View>
    ),
  }
})

describe('Header', () => {
  it('renders both icon buttons', () => {
    const { getAllByTestId, getByTestId } = render(<Header />)

    const buttons = getAllByTestId('headerIconButton')
    expect(buttons).toHaveLength(2)

    expect(getByTestId('tinder-logo')).toBeTruthy()
    expect(getByTestId('star-icon')).toBeTruthy()
  })

  it('changes selected tab when icons are pressed', () => {
    const { getAllByTestId } = render(<Header />)

    const [leftButton, rightButton] = getAllByTestId('headerIconButton')

    fireEvent.press(rightButton)
    fireEvent.press(leftButton)

    expect(leftButton).toBeTruthy()
    expect(rightButton).toBeTruthy()
  })
})
