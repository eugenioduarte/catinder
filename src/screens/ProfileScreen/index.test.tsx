import { render } from '@testing-library/react-native'
import React from 'react'
import ProfileScreen from './index'

describe('ProfileScreen', () => {
  it('renders MarkNumber with text "03"', () => {
    const { getByTestId, getByText } = render(<ProfileScreen />)

    const markNumber = getByTestId('mark-number')
    expect(markNumber).toBeTruthy()

    expect(getByText('03')).toBeTruthy()
  })
})
