import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { StyleSheet, LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './src/components/Navbar';
import Header from './src/components/Header'
import store from './store';

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header/>
        <Navbar/>
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  containerChild: {

  }
});

export default App;