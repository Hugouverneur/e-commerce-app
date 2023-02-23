import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ProductScreen } from '../screen';
import React, {useState} from 'react'

const Favorite = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity style={styles.listItem} onPress={() => setModalVisible(!modalVisible)}>
      <Image
        source={{uri: props.image}}
        style={styles.itemImage}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemDate}>Age : {props.age}</Text>
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

export default Favorite