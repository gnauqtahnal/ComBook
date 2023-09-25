import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {
  BottomSheet,
  BottomSheetProvider,
  useBottomSheet,
} from '../../../components/bottom-sheet'

const ButtonToggleBottomSheet = React.memo(() => {
  const { toggleVisible } = useBottomSheet()

  return (
    <TouchableOpacity
      onPress={() => {
        toggleVisible()
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
  )
})

const HomeScreenComponent = () => {
  return (
    <BottomSheetProvider>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <Text>This is home screen</Text>
          <ButtonToggleBottomSheet />
        </View>
      </SafeAreaView>

      <BottomSheet />
    </BottomSheetProvider>
  )
}

const HomeScreen = HomeScreenComponent

export default HomeScreen

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
})
