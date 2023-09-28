import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const SubmitButton = React.memo(({ containerStyle, onPress }) => {
  return (
    <TouchableHighlight
      onPress={() => {}}
      style={[styles.container, containerStyle]}
      underlayColor="#cccccc"
    >
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <FontAwesome name="send" size={22} color="black" />
        </View>
        <Text>Submit Button</Text>
      </View>
    </TouchableHighlight>
  );
});

export default SubmitButton;

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
  },
  iconContainer: {
    padding: 10,
    borderRadius: 9999,
    backgroundColor: '#dddddd',
  },
});
