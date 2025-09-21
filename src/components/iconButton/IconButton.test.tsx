import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import IconButton from './IconButton'

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: { primary: '#000' },
    border: { radiusSmall: 4 },
  }),
}))

jest.mock('./IconButton.styles', () => ({
  iconButtonStyles: () => ({
    button: { padding: 10 },
  }),
}))

describe('IconButton', () => {
  it('renders children correctly', () => {
    const { getByTestId } = render(
      <IconButton testID="icon-button">
        <React.Fragment>Child</React.Fragment>
      </IconButton>,
    )
    expect(getByTestId('icon-button')).toBeTruthy()
  })

  it('applies extra styles', () => {
    const { getByTestId } = render(
      <IconButton style={{ margin: 5 }} testID="icon-button">
        Child
      </IconButton>,
    )
    const button = getByTestId('icon-button')

    expect(button.props.style).toMatchObject({ padding: 10, margin: 5 })
  })

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(
      <IconButton onPress={onPressMock} testID="icon-button">
        Child
      </IconButton>,
    )
    fireEvent.press(getByTestId('icon-button'))
    expect(onPressMock).toHaveBeenCalled()
  })
})
