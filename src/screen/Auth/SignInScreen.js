import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Entypo } from '@expo/vector-icons';
import { auth, fireDB } from '../../../firebase';
import { useDispatch } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import SignUpScreen from './SignUpScreen';
import { initFavorite } from '../../../favoriteSlice';

export default function SignInScreen() {
  const db = fireDB;
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('')
    const [loaderVisible, setLoaderVisible] = useState(false);

    const postSignIn = () => {
      setLoaderVisible(true);
      signInWithEmailAndPassword(auth, mail, password)
        .then(userCredentials => {
          getDoc(doc(db, 'users', userCredentials.user.uid))
            .then(user => {
              dispatch(initFavorite(user.data().favorites));
            })
          setLoaderVisible(false)
        })

        .catch(err => {
          console.log(err)
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
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
    
          <View style={styles.modalView}>
            <SignUpScreen/>
            <Pressable
              style={styles.inscription}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.inscriptionText}>Vous-avez déjà un compte ?</Text>
            </Pressable>
          </View>
      </Modal>
      <Pressable
        style={styles.inscription}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.inscriptionText}>Vous n'êtes pas inscrits ?</Text>
      </Pressable>
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
  },
  
  inscription: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  inscriptionText: {
    textDecorationLine: 'underline',
    color: '#FD9340'
  },
  modalView: {
    justifyContent: 'center',
    height: '100%'
  }
});