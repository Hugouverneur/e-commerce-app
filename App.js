import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  containerChild: {

  }
});
