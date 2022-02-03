import 'react-native-gesture-handler';
import React, { useEffect, useState,ActivityIndicator} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "../olxxx/src/navigation/tab/Tab"
import AuthStack from "../olxxx/src/navigation/stack/AuthStack"
import firebase from 'firebase';
import Loader from './src/components/Loader';

export default function App() {

  const [component, setComponent]= useState(< Loader />)

  useEffect(() =>{
  const firebaseConfig = {
    apiKey: "AIzaSyApaqM4nbAAcXAdqqSsH6dmuooJ0GbqwPc",
    authDomain: "olx-tech-c779f.firebaseapp.com",
    databaseURL: "https://olx-tech-c779f-default-rtdb.firebaseio.com",
    projectId: "olx-tech-c779f",
    storageBucket: "olx-tech-c779f.appspot.com",
    messagingSenderId: "125583438821",
    appId: "1:125583438821:web:b53f881224e67dd368350c",
    measurementId: "G-P4BMQNLCDV"
  };
firebase.initializeApp(firebaseConfig); 
},[])

useEffect(()=>{
    setTimeout(() =>{
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        setComponent(<AppStack/>)
      }
      else{
        setComponent(<AuthStack/>)
      }
    })
    },3000);
},[])  

  return (
    <NavigationContainer>
      {component}
    </NavigationContainer>
  );
}