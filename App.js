import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import LR from './screens/LR';
import Main from './screens/Main';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,} from '@react-navigation/stack';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from 'firebase/app';
import "firebase/auth";



const Stack = createStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyCnyRbZGJ2wz3tyREaY7Hj56kJSuBFqJwQ",
    authDomain: "connect-23f9d.firebaseapp.com",
    databaseURL: "https://connect-23f9d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "connect-23f9d",
    storageBucket: "connect-23f9d.appspot.com",
    messagingSenderId: "689601813910",
    appId: "1:689601813910:web:d8172d4ff0d85ba310d1b7",
    measurementId: "G-7G5RRF5PPJ"
  };
  //Checking if firebase has been initialized 파이어베이스 초기화 여부 확인
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
    firebase.app();
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else{
      setIsLoggedIn(false);
    }
  });



  const [loaded] = useFonts({  //폰트 설정..
    Audiowide : require('./assets/fonts/AudiowideRegular.ttf'),
    NanumGothic: require('./assets/fonts/NanumGothic.otf'),
    NanumGothicBold: require('./assets/fonts/NanumGothicBold.otf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer> 
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
      </Stack.Navigator> :
      //<Stack.Navigator initialRouteName='Auth'>
      <Stack.Navigator>
      <Stack.Screen name="LR" component={LR} options={{headerShown: false}} />
      
      </Stack.Navigator>
      }
        
      </NavigationContainer>
      
  );
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"white",
  },
  top:{
    flex: 1,
    backgroundColor: "white",
    justifyContent:"flex-end",
    alignItems:"center",
    marginBottom: 30
  },
  mid:{
    flex: 2.5,
    backgroundColor: "white"
  },
  bottom:{
    justifyContent:"space-around",
    flexDirection: 'row',
    marginTop: 20,
  },
  connect:{
    fontSize: 50,
    fontFamily: 'Audiowide',
  },
  NanumRG:{
    fontSize: 25,
    fontFamily: 'NanumGothic',
    marginLeft: 20,
    marginTop: 40
    
  },
  input: {
    backgroundColor:"white",
    height: 40,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1.5,
  },
  membership:{
    fontSize: 20,
    fontFamily: 'NanumGothic',
    
  }
})

