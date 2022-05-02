import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TextInput, StatusBar, Pressable } from 'react-native';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import Bottomimg from './assets/images/bottom-img.svg';

const Report = ({ navigation }) => {
    const[search,setSearch]=useState();
    const [enq,setEnq]=useState();
    const[empname,setEmpname]=useState();
    const[enqreason,setenqreason]=useState();
    const [category, setCategory] = useState();
  const { width, height } = Dimensions.get('window');
  var CATEGORY=['Chain','Ring','Bangle'];
    var ENQUIRY=['Sales Enquiry','Sales Enquiry'];
    var SALES_EMP_NAME=['Dinesh','Kumar'];
    var ENQ_REASON=['Price','Quality'];
  var DETAILS = [
    {
        id: 1,
        name: 'SathisKumar',
        sno:'ITEMC1001'    
    },
    {
        id: 2,
        name: 'MuthuKumar',
        sno:'ITEMC1002'    },
    {
        id: 3,
        name: 'MuthuKumar',
        sno:'ITEMC1003' 
       },
    {
        id: 4,
        name: 'Ashok',
        sno:'ITEMC1004'
    },
    {
        id: 5,
        name: 'Ashok',
        sno:'ITEMC1005'
    },

];


  return (
    <View style={report.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
      <View style={{height:height,width:width,backgroundColor:'#193ea5',position:'absolute',opacity:0.3}}/>
      <View  style={{ flexDirection: 'row', marginHorizontal: 20, top: -100,justifyContent:'space-between' }}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={() => navigation.goBack()}><Arrow name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>REPORTS</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={[report.notify, { marginHorizontal: 5 }]}>
              <Phone name='bell' size={15} color={'black'} />
            </View>
            <Pressable style={report.notify} onPress={()=>navigation.navigate('profile')}>
              <Phone name='user' size={15} color={'black'} />
            </Pressable>
        </View>
      </View>
          
      <View style={report.subcontainer}>
      <View style={{ backgroundColor: 'lightblue', borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 80 }}>
          <View style={report.search}>
            <View style={report.inputContainer}>
              <TextInput
                placeholder="Search now"
                onChange={(value) => setSearch(value)}
                style={report.placeholder}
                placeholderTextColor={'black'}
                value={search}
                keyboardType={'default'}

              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Arrow name='search' size={16} color={'black'} style={{marginRight:10}}/>
              </View>
            </View>
</View>
</View>



<View style={{ top: width * 0.055, marginHorizontal: 20 }}>
            <View style={[report.labelContainer,{marginStart:20}]}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Total Enquiry</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[report.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
                  <Picker
                    selectedValue={enq}
                    onValueChange={(itemValue, itemIndex) =>
                      setEnq(itemValue)
                    }
                    style={{ width: width * 0.8 }}
                  >
                    {ENQUIRY.map((item, index) => {    
                      return (< Picker.Item label={item} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
              </View>

            </View>




            <View style={{ top: width * 0.1, marginHorizontal: 20 }}>
            <View style={[report.labelContainer,{marginStart:20}]}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Sales Employee</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[report.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
                  <Picker
                    selectedValue={empname}
                    onValueChange={(itemValue, itemIndex) =>
                      setEmpname(itemValue)
                    }
                    style={{ width: width * 0.8 }}
                  >
                    {SALES_EMP_NAME.map((item, index) => {
                      return (< Picker.Item label={item} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
              </View>

            </View>



            <View style={{ top: width * 0.15, marginHorizontal: 20 }}>
            <View style={[report.labelContainer,{marginStart:20}]}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Category</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[report.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
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



            <View style={{ top: width * 0.2, marginHorizontal: 20 }}>
            <View style={[report.labelContainer,{marginStart:20}]}>
                <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Enquiry Reason</Text>
              </View>
              <View style={{ height: height * 0.07, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[report.inputtext, { marginLeft: 10, alignSelf: 'center', marginTop: 0, marginRight: 0 }]} />
                  <Picker
                    selectedValue={enqreason}
                    onValueChange={(itemValue, itemIndex) =>
                      setenqreason(itemValue)
                    }
                    style={{ width: width * 0.8 }}
                  >
                    {ENQ_REASON.map((item, index) => {
                      return (< Picker.Item label={item} value={index} key={index} />);
                    })}
                  </Picker>
                </View>
              </View>

            </View>



            <Pressable style={report.button} onPress={() => navigation.navigate('reportlist')}>
          <Text style={{ color: 'white',fontSize: 17 ,fontFamily:'Poppins-Bold' }}>SEARCH</Text>
        </Pressable>




<View style={{width:width,height:35,justifyContent:'center',alignItems:'center',paddingBottom:10,bottom:0,top:height*0.42}}>
                    <Text style={{color:'grey',fontFamily:'Poppins-Regular'}}>Powered  by
                     <Text style={{fontFamily:'Poppins-Bold',color:'grey'}}> Avaniko</Text></Text></View>
    
                     <Bottomimg style={{alignSelf:'center',top:130}}/>
      </View>
    </View>
  );
}
const { width, height } = Dimensions.get('window');

const report = StyleSheet.create({
  mainContainer: {
    height: height,
    backgroundColor: '#111563'
  },
  subcontainer: {
    width: width,
    height: height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: height * 0.11,
    flexDirection: 'column',
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
  search: {
    backgroundColor: 'white',
    height: 45,
    borderRadius: 10,
    top: 20,
    shadowColor: 'black',
    elevation: 6,
    marginBottom: 40,
    marginHorizontal: 20
  },
  inputtext: {
    borderRadius: 50,
    backgroundColor: '#fcb103',
    width: 17,
    height: 17,
    marginTop: 10,
    marginRight: 5,
  },
  inputContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: 'grey',
    justifyContent: 'space-between',
  },
  placeholder: {
    height: height * 0.06,
    flex: 1,
    color: 'grey',
    fontFamily: 'Poppins-Regular',
    paddingLeft: 20
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
   
  },})
export default Report;


