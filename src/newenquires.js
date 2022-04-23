import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar,Pressable } from 'react-native';
import Users from './assets/images/user.svg';
import Arrow from 'react-native-vector-icons/Feather';
import Phone from 'react-native-vector-icons/FontAwesome5';

const Enquires = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');

  return (
    <View style={back.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
<View style={{position:'absolute'}}>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', top: width * 0.11, marginHorizontal: 20}}>
          <View style={{flexDirection:'row'}}>
          <Pressable onPress={() => navigation.goBack()}><Arrow name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>

          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold',marginLeft:10}}>ENQUIRY</Text>
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

</View>
      <View style={back.subcontainer}>
     
<View style={{marginHorizontal:20,justifyContent:'center'}}>
<Text style={{fontFamily:'Poppins-Bold',color:'#111563',marginTop:20,fontSize:18}}>Enquiry Detials</Text>


<View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Phone name='file-signature' size={23} />

                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontFamily: 'Poppind-Regular' }}>ITEMC1001</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#111563' }}>Sathish kumar</Text>
                  </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
                    <Phone name='chevron-right' style={{ color: 'grey' }} size={15} />

                  </View>

                </View>

              </View>


              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7,marginTop:10 }}>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Phone name='file-signature' size={23} />

                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontFamily: 'Poppind-Regular' }}>ITEMC1001</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#111563' }}>Sathish kumar</Text>
                  </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
                    <Phone name='chevron-right' style={{ color: 'grey' }} size={15} />

                  </View>

                </View>

              </View>


              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7,marginTop:10 }}>

<View style={{ flexDirection: 'row' }}>
  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
    <Phone name='file-signature' size={23} />

  </View>
  <View style={{ marginLeft: 20 }}>
    <Text style={{ fontFamily: 'Poppind-Regular' }}>ITEMC1001</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', color: '#111563' }}>Sathish kumar</Text>
  </View>
</View>

<View style={{ justifyContent: 'center', alignItems: 'center' }}>
  <View style={{ borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
    <Phone name='chevron-right' style={{ color: 'grey' }} size={15} />

  </View>

</View>

</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7,marginTop:10 }}>

<View style={{ flexDirection: 'row' }}>
  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
    <Phone name='file-signature' size={23} />

  </View>
  <View style={{ marginLeft: 20 }}>
    <Text style={{ fontFamily: 'Poppind-Regular' }}>ITEMC1001</Text>
    <Text style={{ fontFamily: 'Poppins-Regular', color: '#111563' }}>Sathish kumar</Text>
  </View>
</View>

<View style={{ justifyContent: 'center', alignItems: 'center' }}>
  <View style={{ borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
    <Phone name='chevron-right' style={{ color: 'grey' }} size={15} />

  </View>

</View>

</View>


            </View>
</View>




<View style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#facd52',
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}>
          <Pressable onPress={() => navigation.navigate('addenquiry')} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Phone name='plus' style={{ color: 'white' }} size={35} />
          </Pressable>
        </View>



      </View>
    </View>
  );
}
const { width, height } = Dimensions.get('window');

const back = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#111563',
    height: height * 1.5
  },
  subcontainer: {
    width: width,
    height: height-50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: height * 0.11,
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
  notify: {
    backgroundColor: '#fcc992',
    borderRadius: 8,
    width: 25,
    justifyContent: 'center',
    height: 25,
    alignItems: 'center',
  },
})
export default Enquires;


