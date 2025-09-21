// src/navigation/BottomTabNavigator.test.tsx
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import BottomTabNavigator from './BottomTabNavigator'
import { NavigationScreenName } from './screens'

jest.mock('../screens/DashboardScreen', () => {
  const { Text } = require('react-native')
  const DashboardScreen = () => <Text>DashboardScreen</Text>
  DashboardScreen.displayName = 'DashboardScreen'
  return DashboardScreen
})
jest.mock('../screens/ChatScreen/ChatScreen', () => {
  const { Text } = require('react-native')
  const ChatScreen = () => <Text>ChatScreen</Text>
  ChatScreen.displayName = 'ChatScreen'
  return ChatScreen
})
jest.mock('../screens/ProfileScreen', () => {
  const { Text } = require('react-native')
  const ProfileScreen = () => <Text>ProfileScreen</Text>
  ProfileScreen.displayName = 'ProfileScreen'
  return ProfileScreen
})

jest.mock('../components/bottomBar/BottomBar', () => {
  const { NavigationScreenName } = require('../navigation/screens')
  const { Text, TouchableOpacity, View } = require('react-native')
  const MockBottomBar = ({ current, onChange }: any) => (
    <View testID="bottom-bar">
      <Text>BottomBar {current}</Text>
      <TouchableOpacity
        testID="to-chat"
        onPress={() => onChange(NavigationScreenName.Chat)}
      >
        <Text>GoChat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="to-profile"
        onPress={() => onChange(NavigationScreenName.Profile)}
      >
        <Text>GoProfile</Text>
      </TouchableOpacity>
    </View>
  )
  MockBottomBar.displayName = 'MockBottomBar'
  return MockBottomBar
})

describe('BottomTabNavigator', () => {
  it('should render Dashboard by default', () => {
    const { getByText } = render(<BottomTabNavigator />)
    expect(getByText('DashboardScreen')).toBeTruthy()
  })

  it('should switch to ChatScreen when BottomBar changes to Chat', () => {
    const { getByText, getByTestId, queryByText } = render(
      <BottomTabNavigator />,
    )
    fireEvent.press(getByTestId('to-chat'))
    expect(getByText('ChatScreen')).toBeTruthy()
    expect(queryByText('DashboardScreen')).toBeNull()
  })

  it('should switch to ProfileScreen when BottomBar changes to Profile', () => {
    const { getByText, getByTestId, queryByText } = render(
      <BottomTabNavigator />,
    )
    fireEvent.press(getByTestId('to-profile'))
    expect(getByText('ProfileScreen')).toBeTruthy()
    expect(queryByText('DashboardScreen')).toBeNull()
  })

  it('passes current prop correctly to BottomBar', () => {
    const { getByText } = render(<BottomTabNavigator />)
    expect(
      getByText(`BottomBar ${NavigationScreenName.Dashboard}`),
    ).toBeTruthy()
  })
})
