import React from 'react';
import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { WINDOW_HEIGHT } from './contants';
import { useBottomSheetVisible } from './hooks';

const BottomSheetContainer = ({ containerStyle, children }) => {
  const { visible, toggleVisible } = useBottomSheetVisible();

  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  React.useEffect(() => {
    if (visible === false) {
      translateY.value = 0;
    }
  }, [visible, translateY]);

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translateY.value = Math.max(-150, event.translationY);
    })
    .onFinalize(() => {
      if (translateY.value < 150) {
        translateY.value = withSpring(0, { damping: 50 });
      } else {
        runOnJS(toggleVisible);
        translateY.value = withTiming(
          WINDOW_HEIGHT,
          {
            duration: 300,
            delay: 0,
          },
          () => {
            runOnJS(toggleVisible)();
          }
        );
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.container, animatedStyle, containerStyle]}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

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
});

export default BottomSheetContainer;
