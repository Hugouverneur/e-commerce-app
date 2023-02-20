import { StyleSheet, TouchableOpacity, View, Modal } from 'react-native'
import { Icon } from '@rneui/themed';
import React, { useState } from 'react'
import { AccountScreen } from '../screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
      >
        <Icon
            name='account-circle'
            color= '#fd9340'
        />
      </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}>
            <FontAwesome5 
                name="arrow-left"
                size={20}
                style={{padding: 5}}
            />
          </TouchableOpacity>
          <View style={styles.modalView}>
            <AccountScreen/>
          </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        margin: 10,
        justifyContent: 'center'
    }
})

export default Header