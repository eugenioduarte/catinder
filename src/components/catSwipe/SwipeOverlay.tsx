// src/components/SwipeOverlay/SwipeOverlay.tsx
import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import Animated, { AnimateStyle } from 'react-native-reanimated'
import Text from '../text/Text'

type SwipeOverlayProps = {
  label: string
  baseStyle: ViewStyle
  animatedStyle: AnimateStyle<ViewStyle>
  textStyle: TextStyle
  testID?: string
}

const SwipeOverlay = ({
  label,
  baseStyle,
  animatedStyle,
  textStyle,
  testID,
}: SwipeOverlayProps) => {
  return (
    <Animated.View style={[baseStyle, animatedStyle]} testID={testID}>
      <Text style={textStyle} variant="nunitoBold32">
        {label.toUpperCase()}
      </Text>
    </Animated.View>
  )
}

export default SwipeOverlay
