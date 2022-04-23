import React,{useState} from 'react';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar, TextInput, ScrollView, Pressable } from 'react-native';
import Users from './assets/images/user.svg';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/Feather';

const AddEnquiry = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');
  const[itemcode,setItemcode]=useState();
  const[category,setCategory]=useState();
  const[remarks,setRemarks]=useState();


  return (
    <ScrollView>
      <View style={back.mainContainer}>
        <StatusBar translucent backgroundColor='transparent' />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: width * 0.11, marginHorizontal: 20 }}>
          <View style={{flexDirection:'row'}}>
          <Pressable onPress={() => navigation.goBack()}><Arrow name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>

          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold',marginLeft:10}}>ADD ENQUIRY</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[back.notify, { marginHorizontal: 5 }]}>
              <Phone name='bell' size={15} color={'black'} />
            </View>
            <View style={back.notify}>
              <Phone name='user' size={15} color={'black'} />
            </View>
          </View>
        </View>

        <View style={back.subcontainer}>
        <View style={{ backgroundColor: 'lightblue', borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 80 }}>
        <View style={{ marginTop: 20 }}>
              <View style={[back.labelContainer,{backgroundColor:'lightblue'}]}>
                <Text style={back.text}>Item code</Text>
              </View>
              <View style={[back.inputContainer,{backgroundColor:'white'}]}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter Item code"
                   onChange={(name) => setItemcode(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={itemcode}
                  keyboardType={'default'}

                />
              </View>
            </View>



        </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold', fontSize: 16, marginHorizontal: 20 }}>Personal Details</Text>


            <View style={{ marginTop: 10 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Item code</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter Item code"
                   onChange={(name) => setItemcode(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={itemcode}
                  keyboardType={'default'}

                />
              </View>
            </View>


            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Category</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter Category"
                   onChange={(name) => setCategory(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={category}
                  keyboardType={'default'}

                />
              </View>
            </View>


            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Sub Category</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter Sub Category"
                   onChange={(name) => setCategory(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={category}
                  keyboardType={'default'}

                />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Sales Employee</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter Sales Employee"
                   onChange={(name) => setCategory(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={category}
                  keyboardType={'default'}

                />
              </View>
            </View>


            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Weight</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter Weight"
                   onChange={(name) => setCategory(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={category}
                  keyboardType={'default'}

                />
              </View>
            </View>



            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Estimated Amount</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter Amount"
                   onChange={(name) => setCategory(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={category}
                  keyboardType={'default'}

                />
              </View>
            </View>



            <View style={{ marginTop: 20 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Enquiry Reason</Text>
              </View>
              <View style={back.inputContainer}>
                <View style={back.inputtext} />
                <TextInput
                  placeholder="Enter "
                   onChange={(name) => setCategory(name)}
                  style={back.placeholder}
                  placeholderTextColor={'black'}
                  value={category}
                  keyboardType={'default'}

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
export default AddEnquiry;


