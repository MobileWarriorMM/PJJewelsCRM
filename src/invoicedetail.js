import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image,StatusBar, Pressable,Modal,TextInput } from 'react-native';
import Arrow from 'react-native-vector-icons/Feather';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Bottomimg from './assets/images/bottom-img.svg';

const InvoiceDetail = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState(false);
  const[reason,setReason]=useState();

  return (
    <View style={invoice.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <Modal
      style={{height:height*1.6}}
        animationType="slidetoLeft"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
       onBackdropPress={()=>{setModalVisible(!modalVisible)}}
       onAccessibilityTap={()=>setModalVisible(false)}
      statusBarTranslucent={true}
        
      >
        {/* #l;km,cl */}
        <View style={invoice.centeredView}>
          <View style={invoice.modalView}>
          <View style={{ marginTop: 10 }}>
              <View style={invoice.labelContainer}>
                <Text style={invoice.text}>Reason for rejection</Text>
              </View>
              <View style={invoice.inputContainer}>
                <View style={invoice.inputtext} />
                <TextInput
                  placeholder="Type here..."
                  onChange={(text) => setReason(text)}
                  style={invoice.placeholder}
                  placeholderTextColor={'black'}
                  value={reason}
                  keyboardType={'default'}

                />
              </View>
              <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
              <Pressable style={{backgroundColor:'#fcb103',paddingHorizontal:30,paddingVertical:5,borderRadius:100}}>
                <Text style={{fontFamily:'Poppins-Bold',color:'white'}}>SEND</Text></Pressable>

              </View>
            </View>



          </View>
        </View>
      </Modal>
      <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
      <View style={{height:height,width:width,backgroundColor:'#193ea5',position:'absolute',opacity:0.3}}/>
      <View  style={{ flexDirection: 'row', marginHorizontal: 20, top: -100,justifyContent:'space-between' }}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={() => navigation.goBack()}><Arrow name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>INVOICE DETAILS</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={[invoice.notify, { marginHorizontal: 5 }]}>
              <Phone name='bell' size={15} color={'black'} />
            </View>
            <Pressable style={invoice.notify} onPress={()=>navigation.navigate('profile')}>
              <Phone name='user' size={15} color={'black'} />
            </Pressable>
        </View>
      </View>

      <View style={invoice.subcontainer}>
        
      <View style={{marginHorizontal:20,marginVertical:20}}>
        <View>
          <Text style={{fontFamily:'Poppins-Regular',color:'grey' }}>CUSTOMER NAME</Text>
          <Text style={{color:'#111563',fontFamily:'Poppins-Bold'}}>Muthukumar</Text>
          <View style={{height:0.5,width:width-40,backgroundColor:'lightgrey',marginVertical:10}}/>
        </View>

        <View>
          <Text style={{fontFamily:'Poppins-Regular',color:'grey' }}>CONTACT NUMBER</Text>
          <Text style={{color:'#111563',fontFamily:'Poppins-Bold'}}>9987654321</Text>
          <View style={{height:0.5,width:width-40,backgroundColor:'lightgrey',marginVertical:10}}/>
        </View>

        <View>
          <Text style={{fontFamily:'Poppins-Regular',color:'grey' }}>ITEM</Text>
          <Text style={{color:'#111563',fontFamily:'Poppins-Bold'}}>Chain-rope chain</Text>
          <View style={{height:0.5,width:width-40,backgroundColor:'lightgrey',marginVertical:10}}/>
        </View>

        <View>
          <Text style={{fontFamily:'Poppins-Regular',color:'grey' }}>DOC DATE</Text>
          <Text style={{color:'#111563',fontFamily:'Poppins-Bold'}}>25-04-2022</Text>
          <View style={{height:0.5,width:width-40,backgroundColor:'lightgrey',marginVertical:10}}/>
        </View>

        <View>
          <Text style={{fontFamily:'Poppins-Regular',color:'grey' }}>DOC NO</Text>
          <Text style={{color:'#111563',fontFamily:'Poppins-Bold'}}>ITEM002</Text>
          <View style={{height:0.5,width:width-40,backgroundColor:'lightgrey',marginVertical:10}}/>
        </View>

        <View>
          <Text style={{fontFamily:'Poppins-Regular',color:'grey' }}>GROSS WT</Text>
          <Text style={{color:'#111563',fontFamily:'Poppins-Bold'}}>12.2gm</Text>
          <View style={{height:0.5,width:width-40,backgroundColor:'lightgrey',marginVertical:10}}/>
        </View>

        <View>
          <Text style={{fontFamily:'Poppins-Regular',color:'grey' }}>NET WT</Text>
          <Text style={{color:'#111563',fontFamily:'Poppins-Bold'}}>12.2gm</Text>
          <View style={{height:0.5,width:width-40,backgroundColor:'lightgrey',marginVertical:10}}/>
        </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <Pressable style={{width:width*0.4,backgroundColor:'red',justifyContent:'center',alignItems:'center',height:40,borderRadius:5}}
        onPress={() =>setModalVisible(true)}>
          <Text style={{color:'white',fontFamily:'Poppins-Bold'}}>REJECTED</Text>
        </Pressable>
        <Pressable style={{width:width*0.4,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:5}} onPress={()=>console.log('appp')}>
          <Text style={{color:'white',fontFamily:'Poppins-Bold'}}>APPROVED</Text>
        </Pressable>

      </View>
      </View>

      <View style={{width:width,height:35,justifyContent:'center',alignItems:'center',paddingBottom:10,bottom:0,top:height*0.095}}>
                    <Text style={{color:'grey',fontFamily:'Poppins-Regular'}}>Powered  by
                     <Text style={{fontFamily:'Poppins-Bold',color:'grey'}}> Avaniko</Text></Text></View>
                     {/* <Bottomimg style={{alignSelf:'center',top:-90}}/> */}
      </View>

    </View>
  );
}
const { width, height } = Dimensions.get('window');

const invoice = StyleSheet.create({
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
  centeredView: {
   justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    height:height*1.1
  },
  modalView: {
    height:height*0.4,
    width:width*0.9,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
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
    height: height * 0.25,
    width:width-100
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
  })
export default InvoiceDetail;

