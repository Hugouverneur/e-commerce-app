import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import ProductScreen from './src/screen/Product/ProductScreen';
import store from './store';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ProductScreen/>
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
