import { createNavigationContainerRef } from '@react-navigation/native'
import { NavigationScreenName } from './screens'

export const navigationRef = createNavigationContainerRef<{
  [NavigationScreenName.Dashboard]: undefined
  [NavigationScreenName.Chat]: undefined
  [NavigationScreenName.Profile]: undefined
}>()
