import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import AccountFavorite from './AccountFavoriteScreen';

const AccountScreen = () => {
  return (
    <View>
        <View style={styles.accountScreen}>
        <Icon
                name='account-circle'
                color= '#fd9340'
                size={50}
            />
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userEmail}>email@outlook.fr</Text>
        </View>
        <AccountFavorite/>
    </View>
  )
}

const styles = StyleSheet.create({
    accountScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffede0',
        margin: 20
    },

    userName: {
        fontWeight: 'bold'
    },

    userEmail: {
        fontStyle: 'italic'
    }
})

export default AccountScreen