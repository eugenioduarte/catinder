import { useGetCatBreeds, useVoteForCat } from '@/hooks/useCats'
import { showApiError } from '@/utils/showApiToastError'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import React from 'react'
import DashboardScreen from './index'

jest.mock('@/hooks/useCats', () => ({
  useGetCatBreeds: jest.fn(),
  useVoteForCat: jest.fn(),
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

jest.mock('@/utils/showApiToastError', () => ({
  showApiError: jest.fn(),
}))

jest.mock('@/components/header/Header', () => {
  const { Text } = require('react-native')
  const Header = () => <Text testID="header">Header</Text>
  Header.displayName = 'Header'
  return Header
})

jest.mock('@/components/catSwipe/CatSwipe', () => {
  const React = require('react')
  const { Text } = require('react-native')

  const CatSwipe = React.forwardRef(
    ({ handleLike, catsList, currentIndex }: any, ref: any) => {
      React.useImperativeHandle(ref, () => ({
        swipe: (isLiked: boolean) => handleLike(isLiked),
      }))
      const cat = catsList?.[currentIndex]
      return (
        <Text testID="cat-swipe" onPress={() => handleLike(true)}>
          CatSwipe-{cat?.id}
        </Text>
      )
    },
  )
  CatSwipe.displayName = 'CatSwipe'
  return CatSwipe
})

jest.mock('./Components/ContainerIconButtons', () => {
  const { Text } = require('react-native')
  const ContainerIconButtons = ({ handleLike }: any) => (
    <Text testID="container-buttons" onPress={() => handleLike(false)}>
      ContainerIconButtons
    </Text>
  )
  ContainerIconButtons.displayName = 'ContainerIconButtons'
  return ContainerIconButtons
})

jest.mock('./Components/LoadingCard', () => {
  const { Text } = require('react-native')
  const LoadingCard = () => <Text testID="loading-card">LoadingCard</Text>
  LoadingCard.displayName = 'LoadingCard'
  return LoadingCard
})

describe('DashboardScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders LoadingCard when loading', () => {
    ;(useGetCatBreeds as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    })

    const { getByTestId } = render(<DashboardScreen />)
    expect(getByTestId('loading-card')).toBeTruthy()
  })

  it('renders Header, CatSwipe and ContainerIconButtons when cats exist', () => {
    ;(useGetCatBreeds as jest.Mock).mockReturnValue({
      data: [{ id: '1', image: 'img1' }],
      isLoading: false,
      error: null,
    })
    ;(useVoteForCat as jest.Mock).mockReturnValue({ mutate: jest.fn() })

    const { getByTestId } = render(<DashboardScreen />)

    expect(getByTestId('header')).toBeTruthy()
    expect(getByTestId('cat-swipe')).toBeTruthy()
    expect(getByTestId('container-buttons')).toBeTruthy()
  })

  it('calls vote.mutate with like', () => {
    const mutateMock = jest.fn()
    ;(useGetCatBreeds as jest.Mock).mockReturnValue({
      data: [{ id: '1', image: 'img1' }],
      isLoading: false,
      error: null,
    })
    ;(useVoteForCat as jest.Mock).mockReturnValue({ mutate: mutateMock })

    const { getByTestId } = render(<DashboardScreen />)

    fireEvent.press(getByTestId('cat-swipe'))

    expect(mutateMock).toHaveBeenCalledWith(
      { image_id: '1', value: 1 },
      expect.any(Object),
    )
  })

  it('shows error snackbar on vote error', async () => {
    const mutateMock = jest.fn((_, opts) => opts.onError())
    ;(useGetCatBreeds as jest.Mock).mockReturnValue({
      data: [{ id: '1', image: 'img1' }],
      isLoading: false,
      error: null,
    })
    ;(useVoteForCat as jest.Mock).mockReturnValue({ mutate: mutateMock })

    const { getByTestId } = render(<DashboardScreen />)

    fireEvent.press(getByTestId('cat-swipe'))

    await waitFor(() => {
      expect(showApiError).toHaveBeenCalledWith('snackbar.error')
    })
  })

  it('advances index on vote success', async () => {
    let onSuccessFn: any
    const mutateMock = jest.fn((_, opts) => {
      onSuccessFn = opts.onSuccess
    })
    ;(useGetCatBreeds as jest.Mock).mockReturnValue({
      data: [
        { id: '1', image: 'img1' },
        { id: '2', image: 'img2' },
      ],
      isLoading: false,
      error: null,
    })
    ;(useVoteForCat as jest.Mock).mockReturnValue({ mutate: mutateMock })

    const { getByTestId } = render(<DashboardScreen />)

    fireEvent.press(getByTestId('cat-swipe'))
    await waitFor(() => onSuccessFn())

    fireEvent.press(getByTestId('container-buttons'))

    expect(mutateMock).toHaveBeenLastCalledWith(
      { image_id: '2', value: 0 },
      expect.any(Object),
    )
  })
})
