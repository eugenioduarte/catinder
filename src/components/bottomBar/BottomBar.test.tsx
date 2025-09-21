import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { NavigationScreenName } from '../../navigation/screens'
import BottomBar from './BottomBar'

jest.mock('@/assets', () => {
  const { Text } = require('react-native')
  return {
    CatIcon: () => <Text testID="cat-icon">CatIcon</Text>,
    MessageIcon: () => <Text testID="message-icon">MessageIcon</Text>,
    UserIcon: () => <Text testID="user-icon">UserIcon</Text>,
  }
})

jest.mock('@/hooks/useTheme', () => ({
  useTheme: () => ({
    colors: {
      red: 'red',
    },
  }),
}))

jest.mock('./BottomBar.styles', () => ({
  bottomBarStyles: (theme: any) => ({
    fabWrapper: {},
    container: {},
    tab: {},
  }),
}))

describe('BottomBar', () => {
  const onChangeMock = jest.fn()

  beforeEach(() => {
    onChangeMock.mockClear()
  })

  it('renders all three tabs', () => {
    const { getByTestId } = render(
      <BottomBar
        current={NavigationScreenName.Dashboard}
        onChange={onChangeMock}
      />,
    )
    expect(getByTestId('bottomBarDashboard')).toBeTruthy()
    expect(getByTestId('bottomBarChat')).toBeTruthy()
    expect(getByTestId('bottomBarProfile')).toBeTruthy()
  })

  it('calls onChange with the correct screen when a tab is pressed', () => {
    const { getByTestId } = render(
      <BottomBar
        current={NavigationScreenName.Dashboard}
        onChange={onChangeMock}
      />,
    )
    fireEvent.press(getByTestId('bottomBarChat'))
    expect(onChangeMock).toHaveBeenCalledWith(NavigationScreenName.Chat)

    fireEvent.press(getByTestId('bottomBarProfile'))
    expect(onChangeMock).toHaveBeenCalledWith(NavigationScreenName.Profile)
  })
})
