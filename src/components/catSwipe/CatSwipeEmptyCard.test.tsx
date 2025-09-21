import CatSwipeEmptyCard from '@/components/catSwipe/CatSwipeEmptyCard'
import { render } from '@testing-library/react-native'
import React from 'react'

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      background: '#fff',
      grey: '#ccc',
      text: '#000',
    },
    border: {
      radiusMedium: 8,
    },
    typography: {
      nunitoSemiBold16: { fontSize: 16, fontWeight: '600' },
    },
    spacings: {
      large: 16,
    },
  }),
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) =>
      key === 'emptyState.title' ? 'No more cats to swipe' : key,
  }),
}))

describe('CatSwipeEmptyCard', () => {
  it('renders the empty state message', () => {
    const { getByText } = render(<CatSwipeEmptyCard />)
    expect(getByText('No more cats to swipe')).toBeTruthy()
  })
})
