import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TextInput, StatusBar, Pressable } from 'react-native';
import Lock from 'react-native-vector-icons/EvilIcons';
import Person from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import Users from './assets/images/user.svg';

const Login = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');
  const [mobno, setMobileno] = useState();
  const [pass, setPass] = useState();
  const [checked, setChecked] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={login.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
      <View style={login.subcontainer}>
        <View style={login.prof}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Users height={77} width={77}/>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', top: -30 }}>
          <Text style={{ color: 'black', fontSize: 22,fontFamily:'Poppins-Bold'}}>Login</Text>
        </View>

        <View style={{ top: width * 0.05 }}>
          <View style={login.labelContainer}>
            <Text style={{ color: 'grey',fontFamily:'Poppins-Regular' }}>Mobile no</Text>
          </View>
          <View style={login.inputContainer}>
            <Person name='user' style={{ color: '#fcb103', marginTop: 7 }} size={20} />
            <TextInput
              placeholder="Enter your mobile number"
              onChange={(mobile) => setMobileno(mobile)}
              maxLength={10}
              keyboardType={'number-pad'}
              style={login.placeholder}
              value={mobno}
              placeholderTextColor={'grey'}
            />
          </View>

        </View>

        <View style={{ top: width * 0.10 }}>
          <View style={login.labelContainer}>
            <Text style={{ color: 'grey',fontFamily:'Poppins-Regular' }}>Password</Text>
          </View>
          <View style={login.inputContainer}>
            <Lock name='unlock' style={{ color: '#fcb103', marginTop: 6 }} size={33} />
            <TextInput
              placeholder="Enter your password"
              onChange={(password) => setPass(password)}
              style={login.placeholder}
              keyboardType={'default'}
              value={pass}
              placeholderTextColor={'grey'}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={login.row}>
          <View style={{ flexDirection: 'row' }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            tintColors={{ true: '#fcb103'}}
          />
           
            <Text style={{ color: 'black', marginTop: 7,fontFamily:'Poppins-Regular' }}>Remember me</Text>
          </View>

          <Pressable style={{ marginTop: 7 }}>
            <Text style={{ textDecorationLine: 'underline', color: 'black',fontFamily:'Poppins-Regular' }}>Forgot Password</Text></Pressable>
        </View>

        <Pressable style={login.button} onPress={() => navigation.navigate('welcome', { name: 'welcome' })}>
          <Text style={{ color: 'white',fontSize: 17 ,fontFamily:'Poppins-Bold' }}>LOGIN</Text>
        </Pressable>

        <View style={{ top: width * 0.28, justifyContent: 'center', alignItems: 'center',flexDirection:'row' }}>
          <Text style={{ color: 'black',fontFamily:'Poppins-Regular' }}>New User ? </Text>
          <Pressable onPress={() => navigation.navigate('register', { name: 'register' })} >
            <Text style={{ textDecorationLine: 'underline', color: 'blue',fontFamily:'Poppins-Regular' }}>Register Here</Text></Pressable>
        </View>
      </View>
    </View>
  );
}
const { width, height } = Dimensions.get('window');

const login = StyleSheet.create({
  mainContainer: {
    height: height * 1.5,
    backgroundColor: '#111563'
  },
  subcontainer: {
    width: width,
    height: height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: height * 0.19,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  prof: {
    borderRadius: 100,
    backgroundColor: 'white',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    left: width * 0.37,
    top: -45
  },
  labelContainer: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 40,
    zIndex: 1,
    elevation: 1,
    shadowColor: "white",
    position: "absolute",
    top: -12,
    backgroundColor: 'white',
    shadowColor: 'white'
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    zIndex: 0,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderColor: 'grey',
    height: height * 0.07
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    top: width * 0.15,

  },
  button: {
    backgroundColor: '#fcb103',
    height: height * 0.07,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    left: width * 0.05,
    borderRadius: 30,
    top: width * 0.25,
    shadowColor: 'black',
    elevation: 6,
   
  },
  placeholder:{ 
    height: height * 0.06,
     width: width, 
     color: 'black',
     fontFamily:'Poppins-Regular'
    }
})
export default Login;


