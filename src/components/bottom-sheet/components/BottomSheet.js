import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { WINDOW_HEIGHT } from '../contants'
import { useBottomSheet } from '../hooks'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const BottomSheetScrim = React.memo(({ children }) => {
  const { toggleVisible } = useBottomSheet()

  const onPress = React.useCallback(() => {
    toggleVisible()
  }, [toggleVisible])

  return (
    <AnimatedPressable
      style={styles.scrim}
      onPress={onPress}
      entering={FadeIn}
      exiting={FadeOut}
      children={children}
    />
  )
})

const BottomSheetDragHandler = React.memo(() => {
  return <View style={styles.dragHandler} />
})

const BottomSheetContainer = React.memo(({ children }) => {
  const { state, toggleVisible } = useBottomSheet()
  const translateY = useSharedValue(0)
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  })

  React.useEffect(() => {
    if (state.visible === false) {
      translateY.value = 0
    }
  }, [state.visible])

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translateY.value = Math.max(-150, event.translationY)
    })
    .onFinalize(() => {
      if (translateY.value < WINDOW_HEIGHT / 4) {
        translateY.value = withSpring(0)
      } else {
        runOnJS(toggleVisible)
        translateY.value = withTiming(
          WINDOW_HEIGHT,
          {
            duration: 300,
            delay: 0,
          },
          () => {
            runOnJS(toggleVisible)()
          }
        )
      }
    })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.container, rStyle]}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >
        <BottomSheetDragHandler />
        {children}
      </Animated.View>
    </GestureDetector>
  )
})

export const BottomSheet = React.memo(() => {
  const { state } = useBottomSheet()

  if (!state.visible) {
    return null
  }

  return (
    <>
      <BottomSheetScrim />
      <BottomSheetContainer />
    </>
  )
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: WINDOW_HEIGHT,
    borderRadius: 16,
    backgroundColor: 'white',
    ...StyleSheet.absoluteFillObject,
    top: WINDOW_HEIGHT / 2,
  },
  dragHandler: {
    width: 150,
    height: 5,
    margin: 8,
    borderRadius: 9999,
    backgroundColor: '#333333',
  },
  scrim: {
    flex: 1,
    backgroundColor: 'rgba(64, 64, 64, 0.64)',
    ...StyleSheet.absoluteFillObject,
  },
})
