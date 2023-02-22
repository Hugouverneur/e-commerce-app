import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { addDoc, collection, doc, setDoc, getFirestore, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { app, auth } from '../../../firebase';
import React, { useState, useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductScreen(props) {
  const db = getFirestore(app);

  const [cart, setCart] = useState([])

  const addToCart = async () => {
    if(auth.currentUser != null) {
      let productToAdd = {
        id: props.id,
        name: props.title,
        image: props.image,
        price: props.price
      }
      updateDoc(doc(db, "carts", auth.currentUser.uid), {
        products: arrayUnion(productToAdd)
      })
    } else {
      console.log('Erreur: User not logged in');
    }
  }

  const addToFavorite = () => {
    if(auth.currentUser != null) {
      updateDoc(doc(db, "users", auth.currentUser.uid), {
        favorites: arrayUnion(props.id)
      })
    } else {
      console.log('Erreur: User not logged in');
    }
  }

  return (
    <View style={{flex: 1}}>
        <Image source={{ uri: props.image }} style={styles.image}></Image>
        <ScrollView style={styles.textSection}>
          <Text style={styles.title}>{ props.title }</Text>
          <View style={styles.row}>
            <View style={styles.blockInfo}>
              <Text style={styles.infoText}>{ props.price }€</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.infoText}>{ props.age } ans</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.infoText}>{ props.species }</Text>
            </View>
          </View>
          <View style={styles.sectionDescrition}>
            <Text style={styles.titleSection}>Description :</Text>
            <Text style={styles.descrition}>{ props.description }</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.actionButton, styles.addFavorite]} onPress={() => addToFavorite()}>
              <MaterialIcons style={styles.actionButtonIcon} name="favorite-border" size={24} color="black" />
              {/* <MaterialIcons style={styles.actionButtonIcon} name="favorite" size={24} color="black" /> */}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.addCart]} onPress={() => addToCart()}>
              <MaterialIcons style={styles.actionButtonIcon} name="add-shopping-cart" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
      flex: 1
    },
    textSection: {
      flex: 2,
      marginTop: -56,
      paddingHorizontal: 32,
      backgroundColor: '#fff',
      borderTopLeftRadius: 56,
      borderTopRightRadius: 56
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginVertical: 24,
    },
    titleSection: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 12,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    blockInfo: {
      width: 92,
      height: 92,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 12,
      backgroundColor: '#eef6fc',
      borderRadius: 16,
    },
    infoText: {
      fontSize:18,
      fontWeight: 'bold'
    },
    sectionDescrition: {
      marginVertical: 24,
    },
    descrition: {
      backgroundColor: '#FFEDE0',
      paddingHorizontal: 18,
      paddingVertical: 16,
      borderRadius: 12,
    },
    actionButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 64,
      height: 64,
      borderRadius: 64,
      margin: 12
    },
    addCart: {
      backgroundColor: '#7D6DFF'
    },
    addFavorite: {
      backgroundColor: '#FD9340'
    },
    actionButtonIcon: {
      color: '#fff'
    }
})