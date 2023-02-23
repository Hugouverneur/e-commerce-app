import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, deleteDoc, getFirestore, updateDoc, arrayRemove, onSnapshot  } from 'firebase/firestore';
import { app, auth } from '../../../firebase';
import { ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CartItem from '../../components/CartItem';

const Cart = () => {
  const db = getFirestore(app);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const deleteItem = (product) => {
    let userId = auth.currentUser.uid
    
    updateDoc(doc(db, "carts", userId), {
      products: arrayRemove(product)
    });
  }

  const validateCart = (price) => {
    console.log(cart.length)
    if(cart.length > 0) {
      Alert.alert('Le panier a été validé', `Procédez au paiement de : ${price}€`, [
        {
          text: 'Continuer', 
        },
      ], '');

      let userId = auth.currentUser.uid
      
      updateDoc(doc(db, "carts", userId), {
        products: []
      });
    }

    else {
      Alert.alert('Veuillez ajouter des articles', "Panier Vide", [
        {
          text: 'Continuer', 
        },
      ], '');
    }
  }

  useEffect(() => {
    if(auth.currentUser != undefined) {
      onSnapshot(doc(db, 'carts', auth.currentUser.uid), (userData) => {
        setCart(userData.data().products)
        
        let totalVal = 0
        
        userData.data().products.map((item, index) => {
          totalVal += parseInt(item.price)
        })

        setTotal(totalVal)
      })
    }
  }, [])

  const renderCart = (auth) => {
    if(auth.currentUser != undefined) {
      return (   
        <View style={styles.cartScreen}>
          <View>
          <Text style={styles.screenTitle}>Mon panier</Text>
            <ScrollView>
              { cart.map(item => (
                <CartItem item={item} deleteItem={deleteItem} key={item.id}/>
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.validateButton} onPress={() => validateCart(total)}>
            <Text style={styles.validateButtonText}>Valider le panier: {total}€</Text>
          </TouchableOpacity> 
        </View>
      )
    }

    else {
      console.log(auth)
      return (
        <View style={styles.cartScreen}>
          <Text>Non connecté</Text>
        </View>
      )
    }
  }

  return (
    renderCart(auth)
  )
}

const styles = StyleSheet.create({
  cartScreen: {
    backgroundColor: 'white',
    height: '100%',
    padding: 20
  },

  screenTitle: {
      fontSize: 24,
      fontWeight: 'bold',
  },

  total: {
    fontSize: 20,
    color: 'white',
    padding: 15
  },

  validateButton: {
    backgroundColor: '#fd9340',
    padding: 20,
    margin: 10,
    borderRadius: 30,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: '100%',
    justifyContent: 'center'
  },

  validateButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Cart
