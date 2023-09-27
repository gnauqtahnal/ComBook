import { Entypo, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export const CameraPickerButton = React.memo(
  ({ containerStyle, iconStyle }) => {
    return (
      <TouchableOpacity style={[styles.container, containerStyle]}>
        <Entypo
          name="camera"
          size={44}
          color={iconStyle?.color ? iconStyle?.color : 'black'}
        />
      </TouchableOpacity>
    )
  }
)

const styles = StyleSheet.create({
  container: {},
  icon: {},
})
