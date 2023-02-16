import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"; 
import { app } from '../../../firebase';
import { Entypo } from '@expo/vector-icons';

export default function ProductAddScreen() {
    const db = getFirestore(app);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [species, setSpecies] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const [loaderVisible, setLoaderVisible] = useState(false);

    const postProduct = () => {
        setLoaderVisible(true);
        let formData = {
            name: name,
            description: description,
            species: species,
            birthDate: birthDate,
            price: price,
            image: image
        }
        addDoc(collection(db, 'products'), formData)
            .then(() => setLoaderVisible(false))
    }

  return (
    <View>
        <Text style={styles.screenTitle}>Ajouter un animal</Text>
        <View>
            <Text>Nom</Text>
            <TextInput style={styles.inputs} onChangeText={value => setName(value)}/>
            
            <Text>Description</Text>
            <TextInput style={styles.inputs} onChangeText={value => setDescription(value)}/>
            
            <Text>Espèce</Text>
            <TextInput style={styles.inputs} onChangeText={value => setSpecies(value)}/>

            <Text>Date de naissance</Text>
            <TextInput style={styles.inputs} onChangeText={value => setBirthDate(value)}/>
            
            <Text>Prix</Text>
            <TextInput style={styles.inputs} keyboardType="numeric" onChangeText={value => setPrice(value)}/>
            
            <Text>Image</Text>
            <TextInput style={styles.inputs} onChangeText={value => setImage(value)}/>

            <TouchableOpacity style={styles.button} onPress={() => postProduct()}>
                {loaderVisible ? <Entypo name="dots-three-horizontal" size={42} color="white" /> : <Text style={styles.buttonText}>Envoyer</Text>}
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputs: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFEDE0',
        borderRadius: 12,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 24,
        width: '100%',
        height: 50,
        borderRadius: 50,
        backgroundColor: '#FD9340',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
  });