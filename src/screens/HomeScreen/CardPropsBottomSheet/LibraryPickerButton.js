import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const LibraryPickerButton = React.memo(({ containerStyle, onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.container, containerStyle]}
      underlayColor="#cccccc"
    >
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <FontAwesome name="photo" size={22} color="black" />
        </View>
        <Text style={styles.text}>Chọn ảnh từ Thư Viện</Text>
      </View>
    </TouchableHighlight>
  );
});

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
    backgroundColor: '#dddddd',
    marginRight: 10,
  },
  text: {
    fontSize: 24,
  },
});

export default LibraryPickerButton;
