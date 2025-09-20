import { navigationRef } from './navigationRef'
import { NavigationScreenName } from './screens'

export type RootStackParamList = {
  Dashboard: undefined
  Chat: undefined
  Profile: undefined
}

export const navigatorManager = {
  goToDashboardScreen: () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(NavigationScreenName.Dashboard)
    }
  },
  goToChatScreen: () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(NavigationScreenName.Chat)
    }
  },
  goToProfileScreen: () => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(NavigationScreenName.Profile)
    }
  },
  goBack: () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack()
    }
  },
}
