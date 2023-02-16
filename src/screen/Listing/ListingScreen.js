import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import ListItem from '../../components/ListItem'
import Categories from '../../components/Categories'

export default function ListingScreen() {
  return (
    <ScrollView style={styles.list}>
      <Text style={styles.listTitle}>Market</Text>
      <Categories/>
      <ListItem
        title="Chat Egyptien"
        description="Âgé de 1 mois, proviens du Caire en Egypte"
        date="16/02/23"
      />
      <ListItem
        title="Chat Egyptien"
        description="Âgé de 1 mois, proviens du Caire en Egypte"
        date="16/02/23"
      />
      <ListItem
        title="Chat Egyptien"
        description="Âgé de 1 mois, proviens du Caire en Egypte"
        date="16/02/23"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'white'
  },

  listTitle: {
    fontSize: 26,
    marginLeft: 20,
    marginTop: 10
  }
})