import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const CardImage = React.memo(({ imageStyle, uri = '' }) => {
  return <Image style={[styles.image, imageStyle]} source={{ uri }} />;
});

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
