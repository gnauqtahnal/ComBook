import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetProvider } from './src/components/BottomSheet';
import HomeScreen from './src/screens/home';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <BottomSheetProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <HomeScreen />
        </SafeAreaView>
      </BottomSheetProvider>
    </GestureHandlerRootView>
  );
}
