import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from '@rneui/themed';
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
        <Icon
            name='account-circle'
            color= '#fd9340'
        />
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