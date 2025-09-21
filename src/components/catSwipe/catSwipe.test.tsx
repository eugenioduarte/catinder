import { render } from '@testing-library/react-native'
import React from 'react'
import CatSwipe from './CatSwipe'

jest.mock('./CatSwipe.styles', () => ({
  catSwipeStyles: () => ({
    catSwipeWrapper: { flex: 1 },
    container: { flex: 1 },
    card: { width: 300, height: 400 },
    image: { width: 300, height: 300 },
    infoBar: { padding: 8 },
    infoBarTop: { flexDirection: 'row', justifyContent: 'space-between' },
    catOrigin: { fontSize: 14 },
    overlayRight: { position: 'absolute', top: 50, right: 10 },
    overlayLeft: { position: 'absolute', top: 50, left: 10 },
    overlayText: { fontSize: 32, fontWeight: 'bold' },
  }),
}))

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: { background: '#fff', text: '#000', grey: '#ccc', red: 'red' },
    border: { radiusMedium: 8, radiusSmall: 4 },
    typography: { nunitoBold16: { fontSize: 16, fontWeight: '700' } },
    spacings: { large: 16, medium: 8, small: 4, xSmall: 2 },
  }),
}))

jest.mock('./CatSwipeEmptyCard', () => {
  const { Text } = require('react-native')
  const DummyEmptyCard = () => <Text testID="empty-card">No more cats</Text>
  DummyEmptyCard.displayName = 'CatSwipeEmptyCard'
  return DummyEmptyCard
})

jest.mock('@/components/text/Text', () => {
  const { Text } = require('react-native')
  const DummyText = ({ children }: any) => <Text>{children}</Text>
  DummyText.displayName = 'DummyText'
  return DummyText
})

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
)

jest.mock('react-native-gesture-handler', () => {
  return {
    PanGestureHandler: ({ children }: any) => children,
  }
})

const dummyCats = [
  {
    id: '1',
    name: 'Whiskers',
    affection_level: 5,
    origin: 'Egypt',
    reference_image_id: 'abc123',
  },
  {
    id: '2',
    name: 'Mittens',
    affection_level: 4,
    origin: 'USA',
    reference_image_id: 'def456',
  },
  {
    id: '3',
    name: 'Shadow',
    affection_level: 3,
    origin: 'France',
    reference_image_id: 'ghi789',
  },
]

describe('CatSwipe Component', () => {
  it('renders three cards when cats exist', () => {
    const handleLike = jest.fn()
    const setCurrentIndex = jest.fn()
    const { getByText, queryByTestId } = render(
      <CatSwipe
        currentIndex={0}
        setCurrentIndex={setCurrentIndex}
        catsList={dummyCats}
        handleLike={handleLike}
      />,
    )

    expect(getByText('Whiskers')).toBeTruthy()
    expect(getByText('Mittens')).toBeTruthy()
    expect(getByText('Shadow')).toBeTruthy()

    expect(queryByTestId('empty-card')).toBeNull()
  })

  it('renders CatSwipeEmptyCard when there are no cats', () => {
    const handleLike = jest.fn()
    const setCurrentIndex = jest.fn()
    const { getByTestId } = render(
      <CatSwipe
        currentIndex={0}
        setCurrentIndex={setCurrentIndex}
        catsList={[]}
        handleLike={handleLike}
      />,
    )

    expect(getByTestId('empty-card')).toBeTruthy()
  })
})
