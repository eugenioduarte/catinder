import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import BottomTabNavigator from './BottomTabNavigator'
import { navigationRef } from './navigationRef'

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
