import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app, auth } from '../../../firebase';
import { ScrollView } from 'react-native';
import CartItem from './CartItem';

const Cart = () => {
  const db = getFirestore(app);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const deleteItem = () => {
    console.log('del');
  }

  useEffect(() => {
    getDoc(doc(db, 'carts', auth.currentUser.uid))
      .then(userCart => {
        setCart(userCart.data().products);
        setTotal(0);
        console.log(total);
        Object.values(cart).map(item => setTotal(parseInt(total) + parseInt(item.price)))
      })
  }, [])

  return (
    <View>
      <Text style={styles.screenTitle}>Mon panier</Text>
      <ScrollView>
        { Object.values(cart).map(item => {
          return <CartItem item={item} deleteItem={deleteItem} key={item.id}/>
        })}
      </ScrollView>
      <Text style={styles.total}>Total : {total}€</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenTitle: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  total: {
    fontSize: 32,
    color: '#7d6dff',
  }
})

export default Cart
