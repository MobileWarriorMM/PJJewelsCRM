import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TextInput, StatusBar, Pressable } from 'react-native';
import Users from './assets/images/user.svg';
import Lock from 'react-native-vector-icons/EvilIcons';
import Check from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [psword, setPsword] = useState('');
    var [cpass, setCpass] = useState('');
    const [length, setlength] = useState('');


    return (
        <View style={login.mainContainer}>
            <StatusBar translucent backgroundColor='transparent' />
            <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
            <View style={login.subcontainer}>
                <View style={login.prof}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Users height={77} width={77} />
                    </View>
                </View>

<View style={{flexDirection:'column',justifyContent:'space-between'}}>
    <View>
    <View style={{ justifyContent: 'center', alignItems: 'center', top: -30 }}>
                    <Text style={{ color: 'black', fontSize: 22, fontFamily: 'Poppins-Bold' }}>Saravana kumar</Text>
                    <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>saravanakumar@gmail.com</Text>
                </View>

                <View style={{ backgroundColor: '#d5f1f5', marginHorizontal: 10, borderRadius: 10, height: height * 0.5 }}>


                    <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold',color:'black'}}>Reset/Change Password</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', width: width * 0.85, fontSize: 13 }}>Your New Password Must Be Different From Previously Used Password</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <View style={login.labelContainer}>
                            <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Password</Text>
                        </View>
                        <View style={login.inputContainer}>
                            <Lock name='unlock' style={{ color: '#fcb103', marginTop: 6 }} size={33} />
                            <TextInput
                                placeholder="Enter your password"
                                onChangeText={(val) =>{
                                    setPsword(val)
                                    console.log(psword);
                                    console.log(psword.length);
                                    setlength(psword.length);
                                }}
                                style={login.placeholder}
                                keyboardType={'default'}
                                value={psword}
                                placeholderTextColor={'grey'}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>


                    <View style={{ marginTop: 20 }}>
                        <View style={login.labelContainer}>
                            <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Confirm Password</Text>
                        </View>
                        <View style={login.inputContainer}>
                            <Lock name='unlock' style={{ color: '#fcb103', marginTop: 6 }} size={33} />
                            <TextInput
                                placeholder="Re-enter password"
                                onChangeText={(password) =>{
                                    setCpass(password)
                                    console.log(cpass);
                                }}
                                style={login.placeholder}
                                keyboardType={'default'}
                                value={cpass}
                                placeholderTextColor={'grey'}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                 
                    <View style={{justifyContent:'center',marginLeft:40,marginVertical:10}}>
                    <View style={{flexDirection:'row'}}>
                           <View style={{backgroundColor:'green',height:17,width:17,borderRadius:100,marginRight:5,justifyContent:'center',alignItems:'center'}}>
                               <Check name='check' color={'white'}/>
                           </View>
                           <Text style={{fontFamily:'Poppins-Regular',color:'black'}}> 6 Charecters Minimum</Text>
                       </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'green',height:17,width:17,borderRadius:100,marginRight:10,justifyContent:'center',alignItems:'center'}}>
                                <Check name='check' color={'white'}/>
                            </View>
                            <Text style={{fontFamily:'Poppins-Regular',color:'black'}}>Must Contain One Number</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'green',height:17,width:17,borderRadius:100,marginRight:10,justifyContent:'center',alignItems:'center'}}>
                                <Check name='check' color={'white'}/>
                            </View>
                            <Text style={{fontFamily:'Poppins-Regular',color:'black'}}>One Uppercase Letter</Text>
                        </View>
                    </View>



                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <Pressable style={login.button} onPress={() => console.log('password value',psword)}>
                            <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Poppins-Bold' }}>CHANGE PASSWORD</Text>
                        </Pressable>

                    </View>
                </View>
    </View>
    
    <View style={{justifyContent:'center',alignItems:'center',marginTop:50  }}>
        <Text style={{fontFamily:'Poppins-Regular',textDecorationLine:'underline',color:'red'}}>LOG OUT</Text>
    </View>
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
        backgroundColor: '#d5f1f5',
        shadowColor: 'white'
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        zIndex: 0,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderColor: 'grey',
        height: height * 0.07,

    },
    button: {
        backgroundColor: '#fcb103',
        height: height * 0.06,
        width: width * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: 'black',
        elevation: 6,

    },
    placeholder: {
        height: height * 0.06,
        width: width,
        color: 'black',
        fontFamily: 'Poppins-Regular'
    }
})
export default Profile;


