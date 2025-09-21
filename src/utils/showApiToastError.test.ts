import * as Haptics from 'expo-haptics'
import Toast from 'react-native-toast-message'
import { showApiError } from './showApiToastError'

jest.mock('expo-haptics', () => ({
  notificationAsync: jest.fn(),
  NotificationFeedbackType: {
    Error: 'error',
  },
}))

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}))

describe('showApiError', () => {
  const errorMsg = 'Test error message'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should trigger haptic error notification', () => {
    showApiError(errorMsg)
    expect(Haptics.notificationAsync).toHaveBeenCalledWith('error')
  })

  it('should display a toast with error message', () => {
    showApiError(errorMsg)
    expect(Toast.show).toHaveBeenCalledWith({
      type: 'error',
      text1: 'Erro',
      text2: errorMsg,
      position: 'bottom',
      bottomOffset: 32,
      autoHide: true,
      visibilityTime: 4000,
    })
  })
})
