import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
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
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown}
      exiting={SlideOutDown}
    >
      <BottomSheetDragHandler />
      {children}
    </Animated.View>
  )
})

export const BottomSheet = React.memo(() => {
  const { state } = useBottomSheet()

  if (state.visible) {
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
