import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SignInScreen from '../Auth/SignInScreen'

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <SignInScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  }
})

export default HomeScreen