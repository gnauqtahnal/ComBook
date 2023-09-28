import React from 'react';
import { StyleSheet, View } from 'react-native';

const BottomSheetDragHandler = React.memo(
  ({ containerStyle, dragHandlerStyle }) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.dragHandler, dragHandlerStyle]} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dragHandler: {
    height: 5,
    width: 50,
    borderRadius: 9999,
    backgroundColor: '#dddddd',
  },
});

export default BottomSheetDragHandler;
