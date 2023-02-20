import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import ListItem from '../../components/ListItem'
import Categories from '../../components/Categories'
import { addDoc, collection, doc, getDoc, getFirestore, getDocs } from "firebase/firestore";
import { app } from '../../../firebase';

export default function ListingScreen() {
  const db = getFirestore(app);

  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  useEffect(() => {
    let productsList = []

    getDoc(doc(db, 'users', '52Rm8nj8kPXFSLgb66P8FMmbX493'))
      .then(document => {
        console.log(document.data())
      })

    getDocs(collection(db, 'products')) // replace id by route id
      .then(docsProducts => {
        docsProducts.forEach((doc) => {
          let docData = {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            species: doc.data().species,
            birthDate: doc.data().birthDate,
            price: doc.data().price,
            image: doc.data().image
        }
          productsList = [...productsList, docData] 
          setProducts(productsList);
        })
      })
  }, [])

  const render = (category) => {
    if(category === "Tous") {
      return (
        <ScrollView style={styles.list}>
          <Text style={styles.listTitle}>Market</Text>
          <Categories/>
          {products.map((product, index) => (
            <ListItem
              title={product.name}
              age={product.age}
              birthdate={product.birthdate}
              description={product.description}
              image={product.image}
              price={product.price}
              species={product.species}
              key={index}
            />
          ))}
        </ScrollView>
      )
    }

    else {
      //
    }
  }

  return (
    render(selectedCategory)
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