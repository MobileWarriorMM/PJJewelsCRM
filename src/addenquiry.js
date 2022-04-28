import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar, TextInput, ScrollView, Pressable } from 'react-native';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';

const AddEnquiry = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');
  const [cusname, setCusname] = useState();
  const [itemcode, setItemcode] = useState();
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [salesemp, setSalesemp] = useState();
  const [enqreason, setEnqreason] = useState();
  const [remarks, setRemarks] = useState();
  var Name = ['Durgadevi', 'Muthukumar', 'Surya'];
  var CATEGORY=['Chain','Ring','Bangle'];
  var SUBCATEGORY=['Rope chain','Rope chain'];
  var  SALESEMPLOYEE =['Name1','Name2'];
  var ENQREASON=['Price','Quality'];


  return (
    <ScrollView>
      <View style={back.mainContainer}>
        <StatusBar translucent backgroundColor='transparent' />
        <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
        <View style={{height:height,width:width,backgroundColor:'#193ea5',position:'absolute',opacity:0.3}}/>
      <View  style={{ flexDirection: 'row', marginHorizontal: 20, top: -100,justifyContent:'space-between' }}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={() => navigation.goBack()}><Arrow name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>ADD ENQUIRY</Text>
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
          <View style={{ backgroundColor: '#d7f9fc', borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 80 }}>

            <View style={{ top: width * 0.05, marginHorizontal: 20 }}>
              <View style={back.labelContainer}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Select Priority</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'lightgrey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[back.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
                  <Picker
                    selectedValue={cusname}
                    onValueChange={(itemValue, itemIndex) =>
                      setCusname(itemValue)
                    }
                    style={{ width: width * 0.8 }}
                  >
                    {Name.map((item, index) => {
                      return (< Picker.Item label={item} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
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


            <View style={{ top: width * 0.055, marginHorizontal: 20 }}>
            <View style={[back.labelContainer,{marginStart:20}]}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Category</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[back.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
                  <Picker
                    selectedValue={category}
                    onValueChange={(itemValue, itemIndex) =>
                      setCategory(itemValue)
                    }
                    style={{ width: width * 0.8 }}
                  >
                    {CATEGORY.map((item, index) => {
                      return (< Picker.Item label={item} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
              </View>

            </View>

            <View style={{ top: width * 0.1, marginHorizontal: 20 }}>
            <View style={[back.labelContainer,{marginStart:20}]}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>SubCategory</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[back.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
                  <Picker
                    selectedValue={subcategory}
                    onValueChange={(itemValue, itemIndex) =>
                      setSubcategory(itemValue)
                    }
                    style={{ width: width * 0.8 }}
                  >
                    {SUBCATEGORY.map((item, index) => {
                      return (< Picker.Item label={item} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
              </View>

            </View>


            <View style={{ top: width * 0.15, marginHorizontal: 20 }}>
            <View style={[back.labelContainer,{marginStart:20}]}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Sales Employee</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[back.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
                  <Picker
                    selectedValue={salesemp}
                    onValueChange={(itemValue, itemIndex) =>
                      setSalesemp(itemValue)
                    }
                    style={{ width: width * 0.8 }}
                  >
                    {SALESEMPLOYEE.map((item, index) => {
                      return (< Picker.Item label={item} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
              </View>

            </View>




            <View style={{ top: width * 0.20 }}>
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



            <View style={{ top: width * 0.25 }}>
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

            <View style={{ top: width * 0.30, marginHorizontal: 20 }}>
              <View style={[back.labelContainer,{marginStart:20}]}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Enquiry Reason</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[back.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
                  <Picker
                    selectedValue={enqreason}
                    onValueChange={(itemValue, itemIndex) =>
                      setEnqreason(itemValue)
                    }
                    style={{ width: width * 0.8 }}
                  >
                    {ENQREASON.map((item, index) => {
                      return (< Picker.Item label={item} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
              </View>

            </View>
            <View style={{ top: width * 0.35 }}>
              <View style={back.labelContainer}>
                <Text style={back.text}>Remarks</Text>
              </View>
              <View style={[back.inputContainer, { height: height * 0.15 }]}>
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
            <View style={{ justifyContent: 'center', alignItems: 'center', top: width * 0.40 }}>
              <Pressable style={back.btn}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, fontFamily: 'Poppins-Regular' }}>SAVE</Text>
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


