import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import Favorite from '../../components/Favorite'

const AccountFavorite = () => {
  return (
    <ScrollView style={styles.favoriteScreen}>
      <Text style={styles.favoriteTitle}>Favoris</Text>
      <Favorite
        title="Animal"
        age="12"
        description="Petit chien"
        image="https://i.topi.to/1N5vosf8yfmCsxyu28JLPepA2nL5yzD1esHO03ptLe0=/1200x630/smart/filters:fill(white):format(webp):quality(70)/https%3A%2F%2Fi.topi.to%2FKbyiKwMJbHCNDQOUvTBgtAgjqt6ZhaJKBbFpNqA_Opo%3D%2F1200x630%2Fsmart%2Ffilters%3Afill%28white%29%3Aformat%28jpeg%29%3Aquality%2870%29%2Fhttps%253A%252F%252Fmedia.topito.com%252Fwp-content%252Fuploads%252F2015%252F05%252Fpeanut.jpg"
      />
      <Favorite
        title="Animal"
        age="12"
        description="Petit chien"
        image="https://i.topi.to/1N5vosf8yfmCsxyu28JLPepA2nL5yzD1esHO03ptLe0=/1200x630/smart/filters:fill(white):format(webp):quality(70)/https%3A%2F%2Fi.topi.to%2FKbyiKwMJbHCNDQOUvTBgtAgjqt6ZhaJKBbFpNqA_Opo%3D%2F1200x630%2Fsmart%2Ffilters%3Afill%28white%29%3Aformat%28jpeg%29%3Aquality%2870%29%2Fhttps%253A%252F%252Fmedia.topito.com%252Fwp-content%252Fuploads%252F2015%252F05%252Fpeanut.jpg"
      />
            <Favorite
        title="Animal"
        age="12"
        description="Petit chien"
        image="https://i.topi.to/1N5vosf8yfmCsxyu28JLPepA2nL5yzD1esHO03ptLe0=/1200x630/smart/filters:fill(white):format(webp):quality(70)/https%3A%2F%2Fi.topi.to%2FKbyiKwMJbHCNDQOUvTBgtAgjqt6ZhaJKBbFpNqA_Opo%3D%2F1200x630%2Fsmart%2Ffilters%3Afill%28white%29%3Aformat%28jpeg%29%3Aquality%2870%29%2Fhttps%253A%252F%252Fmedia.topito.com%252Fwp-content%252Fuploads%252F2015%252F05%252Fpeanut.jpg"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  favoriteScreen: {
    margin: 20,
    backgroundColor: 'white'
  },

  favoriteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5
  }
})

export default AccountFavorite