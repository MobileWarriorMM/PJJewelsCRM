import React,{useState} from 'react';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar, TextInput, ScrollView, Pressable } from 'react-native';
import Users from './assets/images/user.svg';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/Feather';

const AddCustomer = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');
  const [cusname,setCusname]=useState();
  const [mobno,setMobno] = useState();
  const[email,setEmail]= useState();
  const[dno,setDno]=useState();
  const[address,setAddress]=useState();
  const[pincode,setPincode]=useState();
  const[statename,setStatename]=useState();
  const[city,setCity]=useState();
  const[eqsource,setEqsource]=useState();
  const[remarks,setRemarks]=useState();


  return (
    <ScrollView>
      <View style={back.mainContainer}>
        <StatusBar translucent backgroundColor='transparent' />
        <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
        <View style={{height:height,width:width,backgroundColor:'#193ea5',position:'absolute',opacity:0.3}}/>
      <View  style={{ flexDirection: 'row', marginHorizontal: 20, top: -100,justifyContent:'space-between' }}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={() => navigation.goBack()}><Arrow name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>ADD CUSTOMER</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={[back.notify, { marginHorizontal: 5 }]}>
              <Phone name='bell' size={15} color={'black'} />
            </View>
            <Pressable style={back.notify} onPress={()=>navigation.navigate('profile')}>
              <Phone name='user' size={15} color={'black'} />
            </Pressable>
        </View>
      </View>

        <View style={back.subcontainer}>

          <View style={{ marginTop: 20 }}>
            <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold', fontSize: 16, marginHorizontal: 20 }}>Personal Information</Text>


            <View style={{ marginTop: 10 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Customer name</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter Customer name"
                   onChange={(name) => setCusname(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={cusname}
                  keyboardType={'default'}

                />
              </View>
            </View>


            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Mobile no</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter your Mobile no"
                   onChange={(no) => setMobno(no)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={mobno}
                  keyboardType={'number-pad'}
                />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Email</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter your EmailId"
                   onChange={(mail) => setEmail(mail)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={email}
                  keyboardType={'email-address'}
                />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Door no</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter your Door no"
                  onChange={(no) => setDno(no)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                   value={dno}
                   keyboardType={'number-pad'}
                />
              </View>
            </View>


            <View style={{ marginTop: 20 }}>
              <View style={[back.labelContainer]}>
                <Text style={back.text}>Address</Text>
              </View>
              <View style={[back.inputContainer,{height:height*0.12}]}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter your Address"
                  onChange={(ad) => setAddress(ad)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={address}
                  keyboardType={'default'}
                />
              </View>
            </View>


            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Pin code</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter your Pin code"
                 onChange={(code) => setPincode(code)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={pincode}
                  keyboardType={'number-pad'}
                />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>State</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter your State"
                 onChange={(st) => setStatename(st)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={statename}
                  keyboardType={'default'}
                />
              </View>
            </View>


            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>City</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter your City"
                  onChange={(cty) => setCity(cty)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={city}
                  keyboardType={'default'}
                />
              </View>
            </View>



            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Enquirey Source</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter your Enquirey Source"
                  onChange={(eq) => setEqsource(eq)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={eqsource}

                />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Remarks</Text>
              </View>
              <View style={[back.inputContainer,{height:height*0.15}]}>
                <TextInput
                  placeholder="Enter your Remarks"
                  onChange={(rm) => setRemarks(rm)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={remarks}

                />
              </View>
            </View>



            {/* <Pressable style={back.button}>
                  <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, fontFamily:'Poppins-Regular' }}>SEND OTP</Text>
                </Pressable> */}
         <View style={{justifyContent:'center',alignItems:'center',marginVertical:20}}>
         <Pressable style={back.btn}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, fontFamily:'Poppins-Regular' }}>SAVE</Text>
            </Pressable>

         </View>



          </View>




        </View>
      </View>

    </ScrollView>

  );
}
const { width, height } = Dimensions.get('window');

const back = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#111563',
    height: height * 1.4
  },
  subcontainer: {
    width: width,
    height: height * 1.3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: height * 0.11,
    backgroundColor: 'white'
  },
  notify: {
    backgroundColor: '#fcc992',
    borderRadius: 8,
    width: 25,
    justifyContent: 'center',
    height: 25,
    alignItems: 'center',
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
  placeholder: {
    height: height * 0.06,
    width: width,
    color: 'grey',
    fontFamily: 'Poppins-Regular'
  },
  text: {
    color: 'grey',
    fontFamily: 'Poppins-Regular'
  },
  inputtext: {
    borderRadius: 50,
    backgroundColor: '#fcb103',
    width: 17,
    height: 17,
    marginTop: 10,
    marginRight: 5,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcb103',
    height: height * 0.07,
    width: width * 0.9,
    shadowColor: 'black',
    elevation: 6, borderRadius: 30,

  }


})
export default AddCustomer;


