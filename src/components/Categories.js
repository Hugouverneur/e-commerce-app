import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import Data from '../data/data'

const Categories = () => {
  return (
    <ScrollView style={styles.categories} horizontal>
        {Data.categories.map((category, index) => (
            <TouchableOpacity style={styles.categoryItemContainer} index={index}>
                <FontAwesome5 
                    name={category.icon}
                    style={styles.categoryIcon}
                    size={width=30}
                />
                <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    categories: {
        flex: 1,
        margin: 20
    },

    categoryItemContainer: {
        width: 70,
        height: 70,
        padding: 10,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ffede0',
        backgroundColor: '#ffede0',
    },

    categoryText: {
        color: '#fd9340',
        fontWeight: 'bold'
    },

    categoryIcon: {
        color: '#fd9340'
    }
})

export default Categories