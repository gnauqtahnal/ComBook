import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { useBottomSheetVisible } from './hooks';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BottomSheetScrim = ({ containerStyle, children }) => {
  const { toggleVisible } = useBottomSheetVisible();

  const onPress = React.useCallback(() => {
    toggleVisible();
  }, [toggleVisible]);

  return (
    <AnimatedPressable
      style={[styles.scrim, containerStyle]}
      onPress={onPress}
      entering={FadeIn}
      exiting={FadeOut}
    >
      {children}
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    backgroundColor: 'rgba(64, 64, 64, 0.64)',
    ...StyleSheet.absoluteFillObject,
  },
});

export default BottomSheetScrim;
