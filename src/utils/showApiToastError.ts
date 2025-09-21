import * as Haptics from 'expo-haptics'
import Toast from 'react-native-toast-message'

export function showApiError(message: string) {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
  Toast.show({
    type: 'error',
    text1: 'Erro',
    text2: message,
    position: 'bottom',
    bottomOffset: 32,
    autoHide: true,
    visibilityTime: 4000,
  })
}
