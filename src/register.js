import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TextInput, StatusBar, Pressable, ScrollView,KeyboardAvoidingView } from 'react-native';
import Users from './assets/images/user.svg';
import Lock from 'react-native-vector-icons/EvilIcons';
import CheckBox from '@react-native-community/checkbox';


const Register = ({ navigation }) => {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirmpass, setConfirmpass] = useState();
  const [admin, setAdmin] = useState(false)
  const [salesCheck, setSalesCheck] = useState(false);
  const [active, setActive] = useState(false);
  const [mlogin, setMlogin] = useState(false);

  return (
    <>
      <KeyboardAvoidingView>

        <View style={register.mainContainer}>
          <StatusBar translucent backgroundColor='transparent' />
          <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />

          <View style={register.subcontainer}>
            <View style={register.prof}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Users height={78} width={78} />
              </View>
            </View>
            <View style={{width: width, justifyContent: 'center', alignItems: 'center',top:-30 }}>
                  <Text style={{ color: 'black', fontSize: 22,fontFamily:'Poppins-Regular' }}>User Registration</Text>
                  <Text style={register.text}>Your Basic Information</Text>
                </View>



            {/* <View>
              <View style={register.prof}>
                <Users height={77} width={77} />
                <View style={{ top: 65, width: width, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: 'black', fontSize: 22,fontFamily:'Poppins-Regular' }}>User Registration</Text>
                  <Text style={register.text}>Your Basic Information</Text>
                </View>

              </View>
            </View> */}

            <ScrollView horizontal={false} style={{top:-20}}>

              <View style={{ height: height * 1.3 }}>
                <View style={{ top: width * 0.04 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Employee code</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <View style={register.inputtext} />
                    <TextInput
                      placeholder="Enter Employee code"
                      onChange={(text) => setName(text)}
                      keyboardType={'default'}
                      style={register.placeholder}
                      placeholderTextColor={'black'}
                      value={name}
                    />
                  </View>

                </View>
                <View style={{ top: width * 0.09 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Employee Name</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <View style={register.inputtext} />
                    <TextInput
                      placeholder="Enter Employee name"
                      onChange={(text) => setName(text)}
                      keyboardType={'default'}
                      style={register.placeholder}
                      placeholderTextColor={'black'}
                      value={name}
                    />
                  </View>

                </View>

                <View style={{ top: width * 0.14 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Mobile</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <View style={register.inputtext} />
                    <TextInput
                      placeholder="Enter your mobile no"
                      onChange={(phno) => setPhone(phno)}
                      style={register.placeholder}
                      keyboardType={'number-pad'}
                      placeholderTextColor={'black'}
                      value={phone}
                      maxLength={10}
                    />
                  </View>
                </View>

                <View style={{ top: width * 0.19 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Email address</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <View style={register.inputtext} />
                    <TextInput
                      placeholder="Enter your email id"
                      onChange={(mail) => setEmail(mail)}
                      style={register.placeholder}
                      keyboardType={'email-address'}
                      placeholderTextColor={'black'}
                      value={email}
                    />
                  </View>
                </View>


                <View style={{ top: width * 0.25 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Organization id</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <View style={register.inputtext} />
                    <TextInput
                      placeholder="Enter your Organization  id"
                      onChange={(mail) => setEmail(mail)}
                      style={register.placeholder}
                      keyboardType={'email-address'}
                      placeholderTextColor={'black'}
                      value={email}
                    />
                  </View>
                </View>


                <View style={{ top: width * 0.30 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Manager</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <View style={register.inputtext} />
                    <TextInput
                      placeholder="Enter your Manager name"
                      onChange={(mail) => setEmail(mail)}
                      style={register.placeholder}
                      keyboardType={'email-address'}
                      placeholderTextColor={'black'}
                      value={email}
                    />
                  </View>
                </View>


                <View style={{ top: width * 0.35 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Location</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <View style={register.inputtext} />
                    <TextInput
                      placeholder="Enter your location"
                      onChange={(mail) => setEmail(mail)}
                      style={register.placeholder}
                      keyboardType={'email-address'}
                      placeholderTextColor={'black'}
                      value={email}
                    />
                  </View>
                </View>


                <View style={{ top: width * 0.40 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Password</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <Lock name='unlock' style={{ color: '#fcb103', marginTop: 5 }} size={33} />
                    <TextInput
                      placeholder="Enter your password"
                      onChange={(password) => setPass(password)}
                      style={register.placeholder}
                      placeholderTextColor={'black'}
                      value={pass}
                      secureTextEntry={true}

                    />
                    <Lock name='eye' style={{ color: 'black' }} size={33} />
                  </View>
                </View>

                <View style={{ top: width * 0.45 }}>
                  <View style={register.labelContainer}>
                    <Text style={register.text}>Confirm password</Text>
                  </View>
                  <View style={register.inputContainer}>
                    <Lock name='unlock' style={{ color: '#fcb103', marginTop: 5 }} size={33} />
                    <TextInput
                      placeholder="Re-enter the password"
                      onChange={(cpass) => setConfirmpass(cpass)}
                      style={register.placeholder}
                      keyboardType={'default'}
                      placeholderTextColor={'black'}
                      value={confirmpass}
                      secureTextEntry={true}
                    />
                    <Lock name='eye' style={{ color: 'black' }} size={33} />
                  </View>
                </View>


                <View style={register.checkbox}>
                  <CheckBox
                    disabled={false}
                    value={admin}
                    onValueChange={(newValue) => setAdmin(newValue)}
                    tintColors={{ true: '#fcb103' }}
                  />

                  <Text style={register.checktext}>Admin User</Text>
                </View>


                <View style={register.checkbox}>
                  <CheckBox
                    disabled={false}
                    value={salesCheck}
                    onValueChange={(newValue) => setSalesCheck(newValue)}
                    tintColors={{ true: '#fcb103' }}
                  />

                  <Text style={register.checktext}>Sales Employee</Text>
                </View>


                <View style={register.checkbox}>
                  <CheckBox
                    disabled={false}
                    value={active}
                    onValueChange={(newValue) => setActive(newValue)}
                    tintColors={{ true: '#fcb103' }}
                  />

                  <Text style={{ color: 'black', marginTop: 7, fontFamily: 'Poppins-Regular' }}>Active</Text>
                </View>


                <View style={register.checkbox}>
                  <CheckBox
                    disabled={false}
                    value={mlogin}
                    onValueChange={(newValue) => setMlogin(newValue)}
                    tintColors={{ true: '#fcb103' }}
                  />

                  <Text style={register.checktext}>Mobile Login</Text>
                </View>

                <Pressable style={register.button}>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, fontFamily: 'Poppins-Regular' }}>SEND OTP</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>


        </View>

      </KeyboardAvoidingView>
    </>
  );
}


const { width, height } = Dimensions.get('window');

const register = StyleSheet.create({
  mainContainer: {
    height: height * 2,
    backgroundColor: '#111563'
  },
  subcontainer: {
    backgroundColor: 'white',
    width: width,
    height: height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: height * 0.19,
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
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 40,
    zIndex: 1,
    elevation: 1,
    position: "absolute",
    top: -12,
    backgroundColor: 'white',
    shadowColor: 'white',
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
    top: width * 0.50,
    shadowColor: 'black',
    elevation: 6,
  },
  inputtext: {
    borderRadius: 50,
    backgroundColor: '#fcb103',
    width: 17,
    height: 17,
    marginTop: 10,
    marginRight: 5,
  },
  placeholder: {
    height: height * 0.06,
    width: width,
    color: 'grey',
    fontFamily: 'Poppins-Regular'
  },
  checkbox: {
    flexDirection: 'row',
    top: width * 0.47,
    marginHorizontal: 20
  },
  checktext: {
    color: 'black',
    marginTop: 7,
    fontFamily: 'Poppins-Regular'
  },
  text: {
    color: 'grey',
    fontFamily: 'Poppins-Regular'
  },

})

export default Register;











