import React from 'react';

import BottomSheetContainer from './BottomSheetContainer';
import BottomSheetScrim from './BottomSheetScrim';
import { useBottomSheetVisible } from './hooks';

const BottomSheet = ({ containerStyle, children }) => {
  const { visible } = useBottomSheetVisible();

  if (visible) {
    return (
      <>
        <BottomSheetScrim />
        <BottomSheetContainer containerStyle={containerStyle}>
          {children}
        </BottomSheetContainer>
      </>
    );
  }

  return null;
};

export default BottomSheet;
