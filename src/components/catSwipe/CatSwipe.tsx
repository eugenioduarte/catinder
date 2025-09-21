import Text from '@/components/text/Text'
import { sizes } from '@/constants/sizes'
import { useTheme } from '@/hooks/useTheme'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { catSwipeStyles } from './CatSwipe.styles'
import CatSwipeEmptyCard from './CatSwipeEmptyCard'
import SwipeOverlay from './SwipeOverlay'

const SWIPE_THRESHOLD = sizes.WIDTH_SCREEN * 0.25

type CatSwipeProps = {
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  catsList: any[]
  handleLike: (isLiked: boolean) => void
}

export default function CatSwipe({
  currentIndex,
  setCurrentIndex,
  catsList,
  handleLike,
}: CatSwipeProps) {
  const theme = useTheme()
  const styles = catSwipeStyles(theme)
  const [cards, setCards] = useState(catsList)

  const removeTopCard = () => {
    setCards((prev) => prev.slice(1))
  }

  return (
    <View style={styles.catSwipeWrapper}>
      <View style={styles.container}>
        {cards.length > 0 ? (
          cards
            .slice(0, 3)
            .map((cat, index) => (
              <Card
                key={cat.id}
                cat={cat}
                index={currentIndex + index}
                onSwipeEnd={removeTopCard}
                handleLike={handleLike}
                setCurrentIndex={setCurrentIndex}
              />
            ))
        ) : (
          <CatSwipeEmptyCard />
        )}
      </View>
    </View>
  )
}

function CardInfoCat({ cat }: { cat: any }) {
  const theme = useTheme()
  const styles = catSwipeStyles(theme)
  return (
    <View style={styles.infoBar}>
      <View style={styles.infoBarTop}>
        <Text variant="nunitoBold16">{cat.name}</Text>
        <Text variant="nunitoBold16">{cat.affection_level}</Text>
      </View>
      <Text style={styles.catOrigin} variant="nunitoRegular14">
        {cat.origin}
      </Text>
    </View>
  )
}

function Card({ cat, index, onSwipeEnd, handleLike, setCurrentIndex }: any) {
  const { t } = useTranslation()
  const theme = useTheme()
  const styles = catSwipeStyles(theme)
  const [isVisible, setIsVisible] = React.useState(true)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX.value
      ctx.startY = translateY.value
    },
    onActive: (event, ctx: any) => {
      translateX.value = ctx.startX + event.translationX
      translateY.value = ctx.startY + event.translationY
    },
    onEnd: (event) => {
      if (Math.abs(event.translationX) > SWIPE_THRESHOLD) {
        const isLike = event.translationX > 0
        const toX = isLike ? sizes.WIDTH_SCREEN * 2 : -sizes.WIDTH_SCREEN * 2
        translateX.value = withTiming(toX, { duration: 300 }, () => {
          runOnJS(setIsVisible)(false)
          runOnJS(handleLike)(isLike)
          runOnJS(onSwipeEnd)()
          runOnJS(setCurrentIndex)(index + 1)
        })
      } else {
        translateX.value = withSpring(0)
        translateY.value = withSpring(0)
      }
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = `${(translateX.value / sizes.WIDTH_SCREEN) * 20}deg`
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate },
      ],
    }
  })

  const likeStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? translateX.value / 100 : 0,
  }))

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? -translateX.value / 100 : 0,
  }))

  if (!isVisible) return null

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[styles.card, animatedStyle, { zIndex: 3 - index }]}
      >
        {cat.reference_image_id && (
          <Image
            source={{
              uri: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        <CardInfoCat cat={cat} />

        <SwipeOverlay
          label={t('SwipeOverlay.like')}
          baseStyle={styles.overlayRight}
          animatedStyle={likeStyle}
          textStyle={styles.overlayText}
          testID="like-overlay"
        />

        <SwipeOverlay
          label={t('SwipeOverlay.nope')}
          baseStyle={styles.overlayLeft}
          animatedStyle={nopeStyle}
          textStyle={styles.overlayText}
          testID="nope-overlay"
        />
      </Animated.View>
    </PanGestureHandler>
  )
}
