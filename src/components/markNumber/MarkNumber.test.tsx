import { render } from '@testing-library/react-native'
import React from 'react'
import MarkNumber from './MarkNumber'

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: { primary: '#000' },
    spacings: { small: 4 },
    border: { radiusSmall: 4 },
  }),
}))

jest.mock('@/components/text/Text', () => {
  const { Text } = require('react-native')
  const MockText = (props: any) => <Text {...props}>{props.children}</Text>
  MockText.displayName = 'MockText'
  return MockText
})

jest.mock('./MarkNumber.styles', () => ({
  markNumberStyles: () => ({
    container: { padding: 10 },
    text: { fontSize: 20 },
  }),
}))

describe('MarkNumber', () => {
  it('renders the component with the provided text', () => {
    const testText = 'Sample Mark'
    const { getByTestId, getByText } = render(<MarkNumber text={testText} />)

    expect(getByTestId('mark-number')).toBeTruthy()
    expect(getByText(testText)).toBeTruthy()
  })
})
