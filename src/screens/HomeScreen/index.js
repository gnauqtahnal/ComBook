import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useBottomSheetVisible } from '../../components/BottomSheet';
import CardPropsButtomSheet from './CardPropsBottomSheet';

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
          backgroundColor: 'red',
        }}
      />
    </TouchableOpacity>
  );
});

const ButtonSubmit = React.memo(() => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 40,
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>XONG</Text>
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

      <CardPropsButtomSheet />
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
