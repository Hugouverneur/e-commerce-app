import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Entypo } from '@expo/vector-icons';
import { auth, fireDB } from '../../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { initFavorite } from '../../../favoriteSlice';
import data from '../../data/data.json'


export default function SignUpScreen() {
  const db = fireDB;
  const dispatch = useDispatch()

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const [loaderVisible, setLoaderVisible] = useState(false);

    const postSignUp = () => {
      setLoaderVisible(true);
      createUserWithEmailAndPassword(auth, mail, password)
        .then(userCredentials => {
          let formData = {
            firstname: firstname,
            lastname: lastname,
            mail: mail,
            favorites: []
          }

          setDoc(doc(db, 'users', userCredentials.user.uid), formData)
            .then(() => {
              setDoc(doc(db, 'carts', userCredentials.user.uid), {products: []})
              dispatch(initFavorite([]));
            })
        })
        setLoaderVisible(false)
    }
    
  return (
    <View style={styles.signUpForm}>
      <Text style={styles.screenTitle}>Inscrivez-vous</Text>
      <View>
            <Text>Prénom</Text>
            <TextInput style={styles.inputs} onChangeText={value => setFirstname(value)}/>
            
            <Text>Nom</Text>
            <TextInput style={styles.inputs} onChangeText={value => setLastname(value)}/>

            <Text>E-mail</Text>
            <TextInput style={styles.inputs} onChangeText={value => setMail(value)}/>
            
            <Text>Mot de passe</Text>
            <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={value => setPassword(value)}/>

            <TouchableOpacity style={styles.button} onPress={() => postSignUp()}>
                {loaderVisible ? <Entypo name="dots-three-horizontal" size={42} color="white" /> : <Text style={styles.buttonText}>{data.logScreen.inscriptionButtonText}</Text>}
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signUpForm : {
    padding: 20
  },

  screenTitle: {
      fontSize: 24,
      fontWeight: 'bold',
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