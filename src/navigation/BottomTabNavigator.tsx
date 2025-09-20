import React, { useState } from 'react'
import { View } from 'react-native'

import BottomBar from '../components/bottomBar/BottomBar'
import ChatScreen from '../screens/ChatScreen'
import DashboardScreen from '../screens/DashboardScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { NavigationScreenName } from './screens'

const SCREENS = {
  [NavigationScreenName.Dashboard]: DashboardScreen,
  [NavigationScreenName.Chat]: ChatScreen,
  [NavigationScreenName.Profile]: ProfileScreen,
}

export default function BottomTabNavigator() {
  const [current, setCurrent] = useState(NavigationScreenName.Dashboard)
  const ScreenComponent = SCREENS[current]
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScreenComponent />
      </View>
      <BottomBar current={current} onChange={setCurrent} />
    </View>
  )
}
