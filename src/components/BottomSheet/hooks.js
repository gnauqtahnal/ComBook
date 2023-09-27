import React from 'react';

import { BottomSheetPropsContext, BottomSheetVisibleContext } from './contexts';

export const useBottomSheetVisible = () => {
  return React.useContext(BottomSheetVisibleContext);
};

export const useBottomSheetProps = () => {
  return React.useContext(BottomSheetPropsContext);
};
