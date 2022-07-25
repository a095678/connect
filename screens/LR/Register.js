import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Platform} from 'react-native';

import CheckBox from 'expo-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import firebase from 'firebase/app';
import "firebase/auth";



function Register({navigation}) {
    const [agree, setAgree] = useState(false);
    const [values, setValues] = useState({
      email: "",
      pwd: "",
      pwd2: ""
  })
  function handleChange(text, eventName) {
      setValues(prev => {
          return {
              ...prev,
              [eventName]: text
          }
      })
  }

  function SignUp() {

    const { email, pwd, pwd2 } = values

    if (pwd == pwd2) {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .then(() => {
              
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    } else {
        alert("Passwords are different!")
    }
}





    return(
      <KeyboardAwareScrollView style={styles.container } behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.NanumRG}>학번</Text>
        <TextInput placeholder={"ex) 20171111"} style={styles.input} onChangeText={text => handleChange(text, "email")} />
        <Text style={styles.NanumRG}>이름</Text>
        <TextInput placeholder={"ex) 홍길동"} style={styles.input}/>
        <Text style={styles.NanumRG}>비밀번호</Text>
        <TextInput secureTextEntry ={true} style={styles.input} onChangeText={text => handleChange(text, "pwd")}/>
        <Text style={styles.NanumRG}>비밀번호 확인</Text>
        <TextInput secureTextEntry ={true} style={styles.input} onChangeText={text => handleChange(text, "pwd2")}/>
        <Text style={styles.NanumRG}>학교 이메일</Text>
        <View style={styles.check}>
          <View style={styles.item1}>
            <TextInput  placeholder={"ex) 20001234@shinhan.ac.kr"} style={styles.input}/>
          </View>
          <View style={styles.item2}>
            <TouchableOpacity style={styles.checkBtn}>
              <Text style={{ color: '#000000', fontSize: 20, fontFamily:'NanumGothicBold' }}>인증</Text> 
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.box1}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#4630EB" : undefined}
              margin = {20}
              marginRight = {-10}
              marginTop = {31}
            />
          </View>
          <View style={styles.box2}>
            <Text style={styles.NanumRG}>[필수]동의합니다.</Text>
          </View>
          <View style={styles.box3}>
            <TouchableOpacity onPress={() => alert('clicked!')}>
              <MaterialCommunityIcons name="plus" size={50} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
            style={{ 
            backgroundColor: '#D9D9D9',
            padding: 15,
            margin: 20,
            marginTop: 50,
            borderRadius: 10,
            alignItems:"center"
            }}
            
            onPress={()=> SignUp()}
            /*navigation.reset({    스택 초기화  둘중 뭘해도 다시 돌아가짐 
                routes: [{
                name: '이동할 컴포넌트 name',
                params: { key : value}}] // 보낼 데이터가 있다면
             }) */
        >
            <Text style={{ color: '#000000', fontSize: 24, fontFamily:'NanumGothicBold' }}>회원가입</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"white",
      paddingTop:30
    },
    NanumRG:{
        fontSize: 20,
        fontFamily: 'NanumGothic',
        marginLeft: 20,
        marginTop: 30
      
      },
      input: {
        backgroundColor:"white",
        height: 40,
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1.5,
      },
      check: {
        flexDirection: 'row',
        

      },
      checkBtn: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center",
        width: 60,
        height: 50
        
      },
      item1:{
        flex: 4
      },
      item2:{
        flex: 1
      },
      box:{
        flexDirection: 'row',
      },
      box1:{
        flex:1
      },
      box2:{
        flex:7
      },
      box3:{  
        flex:3,
        justifyContent: "center",
        alignItems: "center"
      }
})

  export default Register;
  