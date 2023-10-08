import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useBottomSheetVisible } from '../../components/BottomSheet';
import ImagePickerBottomSheet from './CardPropsBottomSheet';

const ButtonToggleBottomSheet = React.memo(() => {
  const { toggleVisible } = useBottomSheetVisible();

  return (
    <TouchableOpacity
      onPress={() => {
        toggleVisible();
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          margin: 5,
          borderRadius: 999,
          backgroundColor: 'gray',
        }}
      />
    </TouchableOpacity>
  );
});

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <ButtonToggleBottomSheet />
      </View>

      <ImagePickerBottomSheet />
    </>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
