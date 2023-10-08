import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const CameraPickerButton = React.memo(
  ({ containerStyle, onPress = () => {} }) => {
    return (
      <TouchableHighlight
        onPress={onPress}
        style={[styles.container, containerStyle]}
        underlayColor="#cccccc"
      >
        <View style={styles.wrapper}>
          <View style={styles.iconContainer}>
            <FontAwesome name="camera" size={22} color="white" />
          </View>
          <Text style={styles.text}>Chọn ảnh từ Camera</Text>
        </View>
      </TouchableHighlight>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 9999,
    backgroundColor: 'black',
    marginRight: 20,
  },
  text: {
    fontSize: 22,
  },
});

export default CameraPickerButton;
