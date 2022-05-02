import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TextInput, StatusBar, Pressable } from 'react-native';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/Feather';
import Bottomimg from './assets/images/bottom-img.svg';

const ReportList = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');
  
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
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>REPORT LIST</Text>
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
       <View style={{marginTop:30}}>
        {
             DETAILS.map((item) => {
                return (
                    <View style={{ marginHorizontal: 20}} key={item.id}>
                        <View style={{ marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>
        
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                        <Phone name='user' size={23} />
        
                                    </View>
                                    <View style={{ marginLeft: 20 }} key={item.id}>
                                        <Text style={{ fontFamily: 'Poppind-Regular', color: 'black' }}>{item.sno}</Text>
                                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563' }}>{item.name}</Text>
                                    </View>
        
                                </View>
        
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Pressable style={{ borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center',
                                     alignItems: 'center', backgroundColor: 'lightgrey' }}>
                                        <Phone name='chevron-right' style={{ color: 'grey' }} size={15} />
        
                                    </Pressable>
        
                                </View>
        
                            </View>
        
                        </View>
        
                    </View>
                )
            })
        
        }


</View>
<View style={{width:width,height:35,justifyContent:'center',alignItems:'center',paddingBottom:10,bottom:0,top:height*0.3}}>
                    <Text style={{color:'grey',fontFamily:'Poppins-Regular'}}>Powered  by
                     <Text style={{fontFamily:'Poppins-Bold',color:'grey'}}> Avaniko</Text></Text></View>
    
                     <Bottomimg style={{alignSelf:'center',top:40}}/>

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
 
})
export default ReportList;


