import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import CustomButton from './CustomButton';
import Start from './screens/Start';
import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function login({navigation}) {
  const [loaded] = useFonts({  //폰트 설정..
    Audiowide : require('./assets/fonts/AudiowideRegular.ttf'),
    NanumGothic: require('./assets/fonts/NanumGothic.otf'),
    NanumGothicBold: require('./assets/fonts/NanumGothicBold.otf'),
  });
  if (!loaded) {
    return null;
  }
  return(
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <View style={styles.top}>
        <Text style={styles.connect}>CONNECT</Text>
      </View>
      <View style={styles.mid}>
        <Text style={styles.NanumRG}>학번</Text>
        <TextInput placeholder={"ex) 20171111"} style={styles.input}/>
        <Text style={styles.NanumRG}>비밀번호</Text>
        <TextInput secureTextEntry ={true} style={styles.input}/>
        <CustomButton title="로그인"/>
        <View style={styles.bottom}>
          <Text style={styles.membership}><Text onPress={()=> navigation.navigate('회원가입')}>회원가입</Text></Text> 
          <Text style={styles.membership}><Text onPress={()=> navigation.navigate('비밀번호 찾기')}>비밀번호 찾기</Text></Text>  
          
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer> 
        <Stack.Navigator initialRouteName='로그인'>
          <Stack.Screen name="로그인" component={login} options={{headerShown: false}} />
          <Stack.Screen name="회원가입" component={Register} options={{}}/>
          <Stack.Screen name="비밀번호 찾기" component={Start}/>
        </Stack.Navigator>
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

