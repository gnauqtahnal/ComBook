import React from 'react';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import {
  BottomSheetContainerContext,
  BottomSheetPropsContext,
  BottomSheetVisibleContext,
} from './contexts';

const BottomSheetProvider = ({ children }) => {
  return (
    <BottomSheetVisibleProvider>
      <BottomSheetPropsProvider>
        <BottomSheetContainerProvider>{children}</BottomSheetContainerProvider>
      </BottomSheetPropsProvider>
    </BottomSheetVisibleProvider>
  );
};

const BottomSheetVisibleProvider = ({ children }) => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = React.useCallback(() => {
    setVisible((value) => {
      return !value;
    });
  }, [setVisible]);

  const value = React.useMemo(() => {
    return { visible, toggleVisible };
  }, [visible, toggleVisible]);

  return (
    <BottomSheetVisibleContext.Provider value={value}>
      {children}
    </BottomSheetVisibleContext.Provider>
  );
};

const BottomSheetPropsProvider = ({ children }) => {
  const [props, setProps] = React.useState({});

  const value = React.useMemo(() => {
    return {
      props,
      setProps,
    };
  }, [props, setProps]);

  return (
    <BottomSheetPropsContext.Provider value={value}>
      {children}
    </BottomSheetPropsContext.Provider>
  );
};

const BottomSheetContainerProvider = ({ children }) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const value = React.useMemo(() => {
    return {
      translateY,
      animatedStyle,
    };
  }, [translateY]);

  return (
    <BottomSheetContainerContext.Provider value={value}>
      {children}
    </BottomSheetContainerContext.Provider>
  );
};

export default BottomSheetProvider;
