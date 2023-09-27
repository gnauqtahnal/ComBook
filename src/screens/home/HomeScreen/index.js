import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  BottomSheet,
  useBottomSheetVisible,
} from '../../../components/BottomSheet';

const ButtonToggleBottomSheet = React.memo(() => {
  const { toggleVisible } = useBottomSheetVisible();

  return (
    <TouchableOpacity
      onPress={() => {
        toggleVisible();
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          margin: 5,
          borderRadius: 999,
          backgroundColor: 'red',
        }}
      />
    </TouchableOpacity>
  );
});

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>This is home screen</Text>
        <ButtonToggleBottomSheet />
      </View>

      <BottomSheet>
        <Text>This is bottom sheet</Text>
      </BottomSheet>
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
