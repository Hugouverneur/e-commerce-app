import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductAddScreen from './src/screen/Product/ProductAddScreen';
import ProductScreen from './src/screen/Product/ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen/>
      {/* <ProductAddScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
