import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <Image
        source={{uri:'https://www.neozone.org/blog/wp-content/uploads/2021/05/chat-egypte-001-780x470.jpg'}}
        style={styles.itemImage}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemDate}>Postée le : {props.date}</Text>
        <Text style={styles.itemDescription}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem: {
      flex: 1,
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eef6fc',
      margin: 19,
      borderRadius: 10
    },

    itemTitle: {
      fontSize: 18,
      color: '#7d6dff',
      fontWeight: 'bold'
    },

    itemImage: {
      width: 100, 
      height: 100,
      margin: 10,
      borderRadius: 10
    },

    itemInfo: {
      width: '50%',
      margin: 5
    },

    itemDate: {
      fontStyle: 'italic',
      color: '#aaaaaa'
    },

    itemDescription: {
      textAlign: 'justify'
    }
})

export default ListItem