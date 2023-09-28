import React from 'react';
import { StyleSheet } from 'react-native';

import {
  BottomSheetContainer,
  BottomSheetDragHandler,
  BottomSheetScrim,
  useBottomSheetVisible,
} from '../../../components/BottomSheet';
import CameraPickerButton from './CameraPickerButton';
import CommCardPreview from './CommCardPreview';
import LibraryPickerButton from './LibraryPickerButton';
import SubmitButton from './SubmitButton';

const CardPropsBottomSheet = () => {
  const { visible } = useBottomSheetVisible();

  if (!visible) {
    return null;
  }

  return (
    <>
      <BottomSheetScrim containerStyle={styles.container}>
        <CommCardPreview />
      </BottomSheetScrim>

      <BottomSheetContainer>
        <BottomSheetDragHandler />
        <CameraPickerButton />
        <LibraryPickerButton />
        <SubmitButton />
      </BottomSheetContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default CardPropsBottomSheet;
