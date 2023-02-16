import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(AsyncStorage.getItem('@user_cart'));
        console.log(cart);
      }, [])
  return (
    <View>
      <Text style={styles.screenTitle}>Mon panier</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})