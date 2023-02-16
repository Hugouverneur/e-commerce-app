import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './src/components/Navbar';
import Header from './src/components/Header'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
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
