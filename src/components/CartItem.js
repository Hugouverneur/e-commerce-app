import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export default function CartItem(props) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{uri: props.item.image}}
        style={styles.itemImage}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{props.item.name}</Text>
        <Text style={styles.itemDescription}>{props.item.price}€</Text>
      </View>
      <TouchableOpacity style={styles.deleteItem} onPress={() => props.deleteItem(props.item)}><Feather name="trash-2" size={24} color="black" /></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFEDE0',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    itemImage: {
        width: 86,
        height: 86,
        borderRadius: 4,
    },
    itemInfo: {
        justifyContent: 'space-between',
        marginLeft: 10,
        flexDirection: 'column'
    },
    itemTitle: {
      fontSize: 16,
      fontStyle: 'italic',
      color: '#aaaaaa'
    },
    itemDescription: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    deleteItem: {
      marginLeft: 100
    }
})