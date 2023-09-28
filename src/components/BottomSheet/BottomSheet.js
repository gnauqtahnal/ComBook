import React from 'react';

import BottomSheetContainer from './BottomSheetContainer';
import BottomSheetDragHandler from './BottomSheetDragHandler';
import BottomSheetScrim from './BottomSheetScrim';
import { useBottomSheetVisible } from './hooks';

const BottomSheet = ({ containerStyle, children }) => {
  const { visible } = useBottomSheetVisible();

  if (visible) {
    return (
      <>
        <BottomSheetScrim />
        <BottomSheetContainer containerStyle={containerStyle}>
          <BottomSheetDragHandler />
          {children}
        </BottomSheetContainer>
      </>
    );
  }

  return null;
};

export default BottomSheet;
