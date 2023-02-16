import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './src/components/Navbar';
import Header from './src/components/Header'
import SignInScreen from './src/screen/Auth/SignInScreen';
import store from './store';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <SignInScreen/
      <Navbar/>
    </SafeAreaView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  containerChild: {

  }
});
