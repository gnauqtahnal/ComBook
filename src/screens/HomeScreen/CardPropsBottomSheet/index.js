import React from 'react';
import { StyleSheet } from 'react-native';

import BottomSheet from '../../../components/BottomSheet';
import CommCardContainer from '../../../components/CommCard';
import CameraPickerButton from './CameraPickerButton';
import LibraryPickerButton from './LibraryPickerButton';
import SubmitButton from './SubmitButton';

const CommCardPreview = () => {
  return (
    <CommCardContainer
      containerStyle={styles.previewContainer}
    ></CommCardContainer>
  );
};

const CardPropsBottomSheet = () => {
  return (
    <BottomSheet>
      <CommCardPreview />
      <CameraPickerButton />
      <LibraryPickerButton />
      <SubmitButton />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#ffffff',
  },
});

export default CardPropsBottomSheet;
