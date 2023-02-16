import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Entypo } from '@expo/vector-icons';
import { auth, fireDB } from '../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData } from '../../../userSlice';
import { doc, getDoc } from 'firebase/firestore';

export default function SignInScreen() {
  const db = fireDB;
  console.log(useSelector(state => state.userData));

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const [loaderVisible, setLoaderVisible] = useState(false);

    const postSignIn = () => {
      setLoaderVisible(true);
      signInWithEmailAndPassword(auth, mail, password)
        .then(userCredentials => {
          // getDoc(doc(db, 'users', userCredentials.user.uid))
          //   .then(user => {
          //     let toStoreUser = {
          //       firstname: user.data().firstname,
          //       lastname: user.data().lastname,
          //       mail: user.data().mail,
          //       uid: userCredentials.user.uid,
          //       isAuth: true,
          //     }
          //     useDispatch(changeUserData(toStoreUser))
          //   })
          setLoaderVisible(false)
        })
    }
    
  return (
    <View style={styles.signInForm}>
      <Text style={styles.screenTitle}>Connectez-vous</Text>
      <View>
            <Text>E-mail</Text>
            <TextInput style={styles.inputs} onChangeText={value => setMail(value)}/>
            
            <Text>Mot de passe</Text>
            <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={value => setPassword(value)}/>

            <TouchableOpacity style={styles.button} onPress={() => postSignIn()}>
                {loaderVisible ? <Entypo name="dots-three-horizontal" size={42} color="white" /> : <Text style={styles.buttonText}>Se connecter</Text>}
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signInForm: {
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