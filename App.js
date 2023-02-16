import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import SignInScreen from './src/screen/Auth/SignInScreen';
import store from './store';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SignInScreen/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
