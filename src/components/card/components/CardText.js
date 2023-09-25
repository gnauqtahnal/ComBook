import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CardText = React.memo(({ containerStyle, textStyle, text }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
})
