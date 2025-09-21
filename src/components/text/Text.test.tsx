import { render } from '@testing-library/react-native'
import React from 'react'
import Text from './Text'

jest.mock('@/constants/theme', () => ({
  typography: {
    h1: { fontSize: 24, fontWeight: 'bold' },
    body: { fontSize: 16 },
  },
}))

describe('Text component', () => {
  it('renders children correctly when a string is provided', () => {
    const { getByTestId, getByText } = render(<Text>TestText</Text>)

    const textElement = getByTestId('text-TestText')
    expect(textElement).toBeTruthy()
    expect(getByText('TestText')).toBeTruthy()
  })

  it('uses the provided testID if given', () => {
    const customTestID = 'custom-testID'
    const { getByTestId } = render(<Text testID={customTestID}>Hello</Text>)
    const textElement = getByTestId(customTestID)
    expect(textElement).toBeTruthy()
  })

  it('applies variant style from typography if variant prop is provided', () => {
    const { getByTestId } = render(<Text variant="h1">Styled Text</Text>)
    const textElement = getByTestId('text-Styled Text')

    const style = textElement.props.style

    const flattenedStyle = Array.isArray(style)
      ? Object.assign({}, ...style)
      : style
    expect(flattenedStyle.fontSize).toBe(24)
    expect(flattenedStyle.fontWeight).toBe('bold')
  })

  it('combines variant style and custom style correctly', () => {
    const customStyle = { color: 'red' }
    const { getByTestId } = render(
      <Text variant="body" style={customStyle}>
        Combined Style
      </Text>,
    )
    const textElement = getByTestId('text-Combined Style')
    const style = textElement.props.style
    const flattenedStyle = Array.isArray(style)
      ? Object.assign({}, ...style)
      : style
    expect(flattenedStyle.fontSize).toBe(16)
    expect(flattenedStyle.color).toBe('red')
  })

  it('renders children correctly when a number is provided', () => {
    const { getByTestId, getByText } = render(<Text>{123}</Text>)
    const textElement = getByTestId('text-123')
    expect(textElement).toBeTruthy()
    expect(getByText('123')).toBeTruthy()
  })
})
