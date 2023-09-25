import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import { WINDOW_HEIGHT } from '../contants'

const BottomSheetComponent = ({ children }) => {
  const translateY = useSharedValue(WINDOW_HEIGHT)
  const context = useSharedValue({ y: 0 })

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value }
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y
      translateY.value = Math.max(translateY.value, -(WINDOW_HEIGHT / 2))
    })
    .onFinalize(() => {
      translateY.value = withSpring(0, { damping: 50 })
    })

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  })

  React.useEffect(() => {
    translateY.value = withSpring(0, { damping: 50 })
  }, [])

  return (
    <>
      <TouchableWithoutFeedback>
        <View style={styles.backgroundContainer} />
      </TouchableWithoutFeedback>

      <GestureDetector gesture={state.gesture}>
        <Animated.View style={[styles.container, rStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  )
}

export const BottomSheet = React.memo(BottomSheetComponent)

export const styles = StyleSheet.create({
  backgroundContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(64, 64, 64, 0.6)',
    position: 'relative',
  },
  container: {
    width: '100%',
    height: WINDOW_HEIGHT,
    borderRadius: 16,
    backgroundColor: 'white',
    ...StyleSheet.absoluteFillObject,
    top: WINDOW_HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
