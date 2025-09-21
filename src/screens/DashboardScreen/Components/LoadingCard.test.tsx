import { render } from '@testing-library/react-native'
import React from 'react'
import LoadingCard from './LoadingCard'

describe('LoadingCard', () => {
  it('renders the ActivityIndicator inside container', () => {
    const { getByTestId } = render(<LoadingCard />)
    expect(getByTestId('loading-card-container')).toBeTruthy()
    expect(getByTestId('loading-card-indicator')).toBeTruthy()
  })
})
