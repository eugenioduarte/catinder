import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import ChatScreen from '../screens/Chat'
import DashboardScreen from '../screens/DashboardScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { NavigationScreenName } from './screens'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={NavigationScreenName.Dashboard}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={NavigationScreenName.Dashboard}
        component={DashboardScreen}
      />
      <Tab.Screen name={NavigationScreenName.Chat} component={ChatScreen} />
      <Tab.Screen
        name={NavigationScreenName.Profile}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}
