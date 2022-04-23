import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar, Pressable, Button, ScrollView, TextInput } from 'react-native';
import Person from 'react-native-vector-icons/Feather';
import Phone from 'react-native-vector-icons/FontAwesome5';

const Customer = ({ navigation }) => {

  const { width, height } = Dimensions.get('window');
  const [search, setSearch] = useState();
  return (
    <View style={custom.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
      <View style={{ flexDirection: 'row', marginHorizontal: 20, top: -100 }}>
        <Pressable onPress={() => navigation.goBack()}><Person name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>CUSTOMER</Text>
      </View>
      <View style={custom.subcontainer}>
        <View style={{ backgroundColor: 'lightblue', borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 115 }}>
          <View style={custom.search}>


            <View style={custom.inputContainer}>
              <TextInput
                placeholder="Search now"
                onChange={(value) => setSearch(value)}
                style={custom.placeholder}
                placeholderTextColor={'black'}
                value={search}
                keyboardType={'default'}

              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Person name='search' size={16} color={'black'} />
              </View>
            </View>

          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={{marginHorizontal:20}}>Existing Customer</Text>
            <Text style={{marginHorizontal:10}}>New Enquirey</Text>
            <Text style={{marginHorizontal:10}}>Follow up Detials</Text>
            <Text style={{marginHorizontal:10}}>Customer</Text>
          </ScrollView>
        </View>

        <View style={{ marginHorizontal: 20, justifyContent: 'center' }}>

          <ScrollView horizontal={false}>
            <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold', fontSize: 18 }}>Customer Detials</Text>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Phone name='user' size={23} />

                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontFamily: 'Poppind-Regular' }}>CUS1001</Text>
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

            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Phone name='user' size={23} />

                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontFamily: 'Poppind-Regular' }}>CUS1001</Text>
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


            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Phone name='user' size={23} />

                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontFamily: 'Poppind-Regular' }}>CUS1001</Text>
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


            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Phone name='user' size={23} />

                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontFamily: 'Poppind-Regular' }}>CUS1001</Text>
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

          </ScrollView>

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
          <Pressable onPress={() => navigation.navigate('addcus')} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Phone name='plus' style={{ color: 'white' }} size={35} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const { width, height } = Dimensions.get('window');

const custom = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#111563',
    height: height * 1.5
  },
  subcontainer: {
    width: width,
    height: height - 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: height * 0.11,
    backgroundColor: 'white'
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
  inputContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: 'grey',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  placeholder: {
    height: height * 0.06,
    //width:width,
    flex: 1,
    color: 'grey',
    fontFamily: 'Poppins-Regular',
    paddingLeft: 20
  },
  inputtext: {
    borderRadius: 50,
    backgroundColor: '#fcb103',
    width: 17,
    height: 17,
    marginTop: 10,
    marginRight: 5,
  },

})
export default Customer;


