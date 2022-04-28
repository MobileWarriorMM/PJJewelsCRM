import React,{useState} from 'react';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar, Pressable,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Coin from 'react-native-vector-icons/Feather';
import Document from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/FontAwesome5';


const WelcomePage = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');
  const[cus,setCus]=useState('customer');
  const[enq,setEnq]=useState('enquiry');
  const[fpdetials,setFpdetials]=useState('followup');


  
  const NavigationEnq=()=>{
    console.log(enq);
    console.log('nnnnnnnn',enq);
    navigation.navigate('customer',{paramKey1:enq});
  }
  const Navigatecus=()=>{
    console.log(cus);
    setCus('customer');
    navigation.navigate('customer',{paramKey:cus});
  }
  const NavigationFpDetials=()=>{
    console.log(fpdetials);
    navigation.navigate('customer',{paramKey2:fpdetials});
  }
  return (
     <ScrollView horizontal={false}>
    <View style={well.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: width * 0.11, marginHorizontal: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>WELCOME</Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={[well.notify,{marginHorizontal:5}]}>
            <Phone name='bell' size={15} color={'black'} />
          </View>
          <Pressable style={well.notify} onPress={()=>navigation.navigate('profile')}>
            <Phone name='user' size={15} color={'black'} />
          </Pressable>
        </View>
      </View>
      <View style={well.subcontainer}>
      <View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Image source={{ uri: 'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2015/12/06023401/passwords-10x10-featured.jpg' }}
              style={{ width: 90, height: 90, borderRadius: 100 }} />
            <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold', marginTop: 5, fontSize: 23 }}>PJ JEWELERY</Text>
          </View>
        </View>


        <View style={{ justifyContent: 'center', alignItems: 'center',}}>

<View style={[well.box, { backgroundColor: 'lightblue', borderColor: 'darkblue', borderWidth: 1 }]}>
    <Pressable style={well.view} onPress={()=>Navigatecus()}>
      <View>
        <Text style={{ fontSize: 22, fontFamily: 'Poppins-Bold' }}>Customer</Text>
        <Text style={{ fontFamily: 'Poppins-Regular' }}>Lorem ipsum dolor sit amet,</Text>
      </View>
      <Icon name='bookmark' size={50} />
    </Pressable>
  </View>
  <View style={[well.tag, { backgroundColor: 'white' }]}>
    <View style={well.content}>
      <Text style={{fontFamily:'Poppins-Regular'}}>View Detials</Text>
      <Coin name='target' size={20} color={'#fce005'} />
    </View>
  </View>


  <Pressable style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => NavigationEnq()}>
    <View style={[well.box, { backgroundColor: 'lightgreen', borderColor: 'darkgreen', borderWidth: 1 }]}>
      <View style={well.view}>
        <View>
          <Text style={{ fontSize: 22, fontFamily: 'Poppins-Bold' }}>Enquirey</Text>
          <Text style={{ fontFamily: 'Poppins-Regular' }}>Lorem ipsum dolor sit amet,</Text>
        </View>
        <Icon name='microphone' size={50} />
      </View>
    </View>
    <View style={[well.tag, { backgroundColor: 'white' }]}>
      <View style={well.content}>
      <Text style={{fontFamily:'Poppins-Regular'}}>View Detials</Text>
        <Coin name='target' size={20} color={'#fce005'} />
      </View>
    </View>
  </Pressable>


  <View style={[well.box, { backgroundColor: 'lightpink', borderColor: 'darkpink', borderWidth: 1 }]}>
    <Pressable style={well.view} onPress={()=>NavigationFpDetials()}>
      <View>
        <Text style={{ fontSize: 22, fontFamily: 'Poppins-Bold' }}>Follow up</Text>
        <Text style={{ fontFamily: 'Poppins-Regular' }}>Lorem ipsum dolor sit amet,</Text>
      </View>
      <Phone name='user-friends' size={50} />
    </Pressable>
  </View>
  <View style={[well.tag, { backgroundColor: 'white' }]}>
    <View style={well.content}>
    <Text style={{fontFamily:'Poppins-Regular'}}>View Detials</Text>
      <Coin name='target' size={20} color={'#fce005'} />
    </View>
  </View>



  <View style={[well.box, { backgroundColor: 'lightgrey', borderColor: 'darkgrey', borderWidth: 1 }]}>
    <Pressable style={well.view} onPress={()=>navigation.navigate('invoicelist')}>
      <View>
        <Text style={{ fontSize: 22, fontFamily: 'Poppins-Bold' }}>Invoice Approvel</Text>
        <Text style={{ fontFamily: 'Poppins-Regular' }}>Lorem ipsum dolor sit amet,</Text>
      </View>
      <Document name='filetext1' size={50} />
    </Pressable>
  </View>
  <View style={[well.tag, { backgroundColor: 'white' }]}>
    <View style={well.content}>
    <Text style={{fontFamily:'Poppins-Regular'}}>View Detials</Text>
      <Coin name='target' size={20} color={'#fce005'} />
    </View>
  </View>



  <View style={[well.box, { backgroundColor: 'lightblue', borderColor: 'darkblue', borderWidth: 1 }]}>
    <Pressable style={well.view} onPress={()=>navigation.navigate('report')}>
      <View>
        <Text style={{ fontSize: 22, fontFamily: 'Poppins-Bold' }}>Report</Text>
        <Text style={{ fontFamily: 'Poppins-Regular' }}>Lorem ipsum dolor sit amet,</Text>
      </View>
      <Icon name='bookmark' size={50} />
    </Pressable>
  </View>
  <View style={[well.tag, { backgroundColor: 'white' }]}>
    <View style={well.content}>
      <Text style={{fontFamily:'Poppins-Regular'}}>View Detials</Text>
      <Coin name='target' size={20} color={'#fce005'} />
    </View>
  </View>


 
</View>
      </View>
    </View>

    </ScrollView>
  );
}
const { width, height } = Dimensions.get('window');

const well = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#111563',
    height: height * 1.25
  },
  subcontainer: {
    width: width,
    height: height*1.2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: height * 0.12,
    backgroundColor: 'white'
  },
  box: {
    width: width * 0.9,
    height: height * 0.13,
    borderRadius: 25
  },
  tag: {
    width: width * 0.6,
    height: height * 0.05,
    borderRadius: 35,
    top: -20,
    shadowColor: 'black',
    elevation: 6,
  },
  view: {
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15
  },
  content: {
    flexDirection: 'row',
    margin: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  notify:{ 
    backgroundColor: '#fcc992',
     borderRadius: 8,
      width: 25, 
      height: 25, 
      justifyContent: 'center',
       alignItems: 'center', 
       }
})

export default WelcomePage;


