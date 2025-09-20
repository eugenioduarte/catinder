import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// ...restante do código...
import { navigationRef } from './navigationRef'
import BottomTabNavigator from './BottomTabNavigator'

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
