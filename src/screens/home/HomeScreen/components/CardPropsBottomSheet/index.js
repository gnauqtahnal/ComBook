import React from 'react'
import { StyleSheet } from 'react-native'

import { BottomSheet } from '../../../../../components/bottom-sheet'
import { Card, CardImage, CardText } from '../../../../../components/card'

export const CardPropsBottomSheet = React.memo(() => {
  return (
    <BottomSheet containerStyle={styles.container}>
      <Card>
        <CardImage uri="https://picsum.photos/3840/2160" />
        <CardText text="mot tu gi do rat rat la dai" />
      </Card>
    </BottomSheet>
  )
})

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
})
