import { render } from '@testing-library/react-native'
import React from 'react'
import ChatScreen from './ChatScreen'

describe('ChatScreen', () => {
  it('renders MarkNumber with text "02"', () => {
    const { getByTestId, getByText } = render(<ChatScreen />)

    const markNumber = getByTestId('mark-number')
    expect(markNumber).toBeTruthy()

    expect(getByText('02')).toBeTruthy()
  })
})
