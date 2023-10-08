import React from 'react';

import {
  BottomSheetContainerContext,
  BottomSheetPropsContext,
  BottomSheetVisibleContext,
} from './contexts';

export const useBottomSheetVisible = () => {
  return React.useContext(BottomSheetVisibleContext);
};

export const useBottomSheetProps = () => {
  return React.useContext(BottomSheetPropsContext);
};

export const useBottomSheetContainer = () => {
  return React.useContext(BottomSheetContainerContext);
};
