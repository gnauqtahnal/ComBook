import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  BottomSheetContainer,
  BottomSheetDragHandler,
  BottomSheetScrim,
  useBottomSheetVisible,
} from '../../../components/BottomSheet';
import { WINDOW_HEIGHT } from '../../../utils';
import CameraPickerButton from './CameraPickerButton';
import LibraryPickerButton from './LibraryPickerButton';

const ImagePickerBottomSheet = () => {
  const { visible } = useBottomSheetVisible();
  const [height, setHeight] = React.useState(WINDOW_HEIGHT);

  if (!visible) {
    return null;
  }

  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setHeight(height);
  };

  return (
    <>
      <BottomSheetScrim containerStyle={styles.container} />

      <BottomSheetContainer
        containerStyle={{
          top: WINDOW_HEIGHT - height - 32,
          height,
        }}
      >
        <View
          onLayout={onLayout}
          style={{
            width: '100%',
          }}
        >
          <BottomSheetDragHandler />
          <CameraPickerButton />
          <LibraryPickerButton />
        </View>
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

export default ImagePickerBottomSheet;
