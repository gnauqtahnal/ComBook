import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Card = React.memo(({ children }) => {
  return <View style={styles.container}>{children}</View>
})

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128 * 1.3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#333333',
    overflow: 'hidden',
  },
})
