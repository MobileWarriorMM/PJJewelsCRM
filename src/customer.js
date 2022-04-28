import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar, Pressable, Button, ScrollView, TextInput } from 'react-native';
import Person from 'react-native-vector-icons/Feather';
import Phone from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import Calender from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';

const Customer = ({ navigation, route }) => {
  //const[con,setcon]=useState(console.log('djmehdmeiouhloehow',route.params.paramKey2));
  const [cus, setCus] = useState(route.params.paramKey);
  const [enq, setEnq] = useState(route.params.paramKey1);
  const [fpdetial, setFpdetials] = useState(route.params.paramKey2);
  const [mydate, setDate] = useState(new Date());
  let [displaymode, setMode] = useState();
  const { width, height } = Dimensions.get('window');
  const [search, setSearch] = useState();
  var prty = ['Hot', 'Normal', 'Low'];
  var selectstatus = ['Open', 'Close']
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();
  const [reason, setReason] = useState();
  var CUSTOMER = [
    {
      id: 1,
      name: 'SathisKumar',
      sno: 'CUS1001'
    },
    {
      id: 2,
      name: 'MuthuKumar',
      sno: 'CUS1002'
    },
    {
      id: 3,
      name: 'MuthuKumar',
      sno: 'CUS1003'
    },
    {
      id: 4,
      name: 'Ashok',
      sno: 'CUS1004'
    },
    {
      id: 5,
      name: 'Ashok',
      sno: 'CUS1005'
    },
    

  ];

  var ENQUIRY = [
    {
      id: 1,
      name: 'SathisKumar',
      sno: 'ITEMC1001'
    },
    {
      id: 2,
      name: 'MuthuKumar',
      sno: 'ITEMC1002'
    },
    {
      id: 3,
      name: 'MuthuKumar',
      sno: 'ITEMC1003'
    },
    {
      id: 4,
      name: 'Ashok',
      sno: 'ITEMC1004'
    },
    {
      id: 5,
      name: 'Ashok',
      sno: 'ITEMC1005'
    },
  ];



  var FOLLOWUP = [
    {
      id: 1,
      date: '26-04-2022',
      no: 'EQ01'
    },
    {
      id: 2,
      date: '26-04-2022',
      no: 'EQ02'
    },
    {
      id: 3,
      date: '26-04-2022',
      no: 'EQ03'
    },
    {
      id: 4,
      date: '26-04-2022',
      no: 'EQ04'
    },
    {
      id: 5,
      date: '26-04-2022',
      no: 'EQ05'
    },
  ];


  const Changecus = () => {
    console.log('change to customer');
    setEnq('');
    console.log('setEnq....', enq);
    setFpdetials('');
    console.log('fpdetials....', fpdetial);
    setCus('customer');
    console.log('cus...', cus);
  }

  const Changeenq = () => {
    console.log('change to enquiry');
    setCus('');
    console.log('cus....', cus);
    setFpdetials('');
    console.log('fp....', fpdetial);
    setEnq('enquiry');
    console.log('enq....', enq);
  }

  const ChangeFp = () => {
    console.log('change to changefpdetials');
    setCus('');
    console.log('cus...', cus);
    setEnq('');
    console.log('');
    console.log('enq....', enq);
    setFpdetials('followup');
    console.log('fp....');
  }



  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
    console.log(currentDate);
    console.log(displaymode);
    setMode('');
  };

  const displayDatepicker = (currentmode) => {
    setMode(currentmode);
    console.log(currentmode);
    console.log('1....');
    console.log(displaymode)
  };


  return (
    <View style={custom.mainContainer}>
      <StatusBar translucent backgroundColor='transparent' />
      <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
      <View style={{height:height,width:width,backgroundColor:'#193ea5',position:'absolute',opacity:0.3}}/>
      <View  style={{ flexDirection: 'row', marginHorizontal: 20, top: -100,justifyContent:'space-between' }}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={() => navigation.goBack()}><Person name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>

      {
        (cus==='customer')?
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>CUSTOMER</Text>
        :(enq==='enquiry')?
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>ENQUIRY</Text>
        :(fpdetial==='followup')?
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>FOLLOW UP</Text>
        :<View/>
      }


        </View>
        <View style={{flexDirection:'row'}}>
        <View style={[custom.notify, { marginHorizontal: 5 }]}>
              <Phone name='bell' size={15} color={'black'} />
            </View>
            <Pressable style={custom.notify} onPress={()=>navigation.navigate('profile')}>
              <Phone name='user' size={15} color={'black'} />
            </Pressable>
        </View>
      </View>
    <View style={custom.subcontainer}>
        <View style={{ backgroundColor: 'lightblue', borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 128 }}>
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
                <Person name='search' size={16} color={'black'} style={{marginRight:10}}/>
              </View>
            </View>

          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              (cus === 'customer') ?
                <Text style={custom.active}>Existing Customer</Text>
                : <Pressable onPress={() => Changecus()}><Text style={custom.inactive}>Existing Customer</Text></Pressable>
            }
            {
              (enq === 'enquiry') ?
                <Pressable><Text style={custom.active}>New Enquiry</Text></Pressable>
                : <Pressable onPress={() => Changeenq()}><Text style={custom.inactive}>New Enquiry</Text></Pressable>
            }
            {
              (fpdetial === 'followup') ?
                <Pressable><Text style={custom.active}>Follow up Detials</Text></Pressable>
                : <Pressable onPress={() => ChangeFp()}><Text style={custom.inactive}>Follow up Detials</Text></Pressable>
            }
          </ScrollView>
        </View>

        <>
          {
            (cus === 'customer') ?
              <View style={{ marginHorizontal: 20, justifyContent: 'center' }}>

                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{height:height*0.75}}>
                  <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold', fontSize: 18, marginTop: 10 }}>Customer Detials</Text>
                  <View style={{height:height}}>
                    {
                      CUSTOMER.map((item) => {
                        return (
                            <View key={item.id}>
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
                                  <Pressable style={{
                                    borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center',
                                    alignItems: 'center', backgroundColor: 'lightgrey'
                                  }}>
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



                </ScrollView>
                {/* <View style={{width:width,height:35,justifyContent:'center',alignItems:'center',marginBottom:50,backgroundColor:'red'}}>
                    <Text style={{color:'grey',fontFamily:'Poppins-Regular'}}>Powered  by
                     <Text style={{fontFamily:'Poppins-Bold',color:'grey'}}> Avaniko</Text></Text></View>
     */}

              </View>
              : (enq === 'enquiry') ?
                <View style={{ marginHorizontal: 20, justifyContent: 'center' }}>
              <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{height:height*0.75}}>

                  <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563', marginTop: 20, fontSize: 18 }}>Enquiry Detials</Text>
                  <View>
                    {
                      ENQUIRY.map((item) => {
                        return (
                          <View key={item.id}>
                            <View style={{ marginTop: 10 }}>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>

                                <View style={{ flexDirection: 'row' }}>
                                  <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <Phone name='file-signature' size={23} />

                                  </View>
                                  <View style={{ marginLeft: 20 }} key={item.id}>
                                    <Text style={{ fontFamily: 'Poppind-Regular', color: 'black' }}>{item.sno}</Text>
                                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563' }}>{item.name}</Text>
                                  </View>

                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                  <Pressable style={{
                                    borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center',
                                    alignItems: 'center', backgroundColor: 'lightgrey'
                                  }}>
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
                  </ScrollView>
                </View>
                : (fpdetial === 'followup') ?
                  <View style={{ marginHorizontal: 5, marginTop: 10 }}>
                    <ScrollView horizontal={false} style={{height: height*0.76,marginHorizontal:10}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                      <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563', fontSize: 16 }}>Follow Up List</Text>

                      <View>
                        <Pressable style={{ backgroundColor: '#faa702', borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: width * 0.10, height: height * 0.050 }}
                          onPress={() => displayDatepicker('date')}>
                          <Calender name='calendar' color={'white'} size={20} />
                        </Pressable>

                        {(displaymode == 'date') ? (
                          <DateTimePicker
                            testID="dateTimePicker"
                            value={mydate}
                            mode={displaymode}
                            is24Hour={true}
                            display="default"
                            onChange={() => changeSelectedDate()}
                          />
                        ) : <View />}
                      </View>

                    </View>

                    <View style={{ backgroundColor: '#f0fbfc', height: height * 0.27, marginTop: 10, borderRadius: 10 }}>
                      <View style={{ top: width * 0.05, marginHorizontal: 10 }}>
                        <View style={custom.labelContainer}>
                          <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Select Priority</Text>
                        </View>
                        <View style={{ height: height * 0.06, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center',backgroundColor:'white'  }}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={custom.inputtext} />
                            <Picker
                              selectedValue={priority}
                              onValueChange={(itemValue, itemIndex) =>
                                setPriority(itemValue)
                              }
                              style={{ width: width * 0.8 }}
                            >
                              {prty.map((item, index) => {
                                return (< Picker.Item label={item} value={index} key={index} />);
                              })}
                            </Picker>
                          </View>
                        </View>

                      </View>


                      <View style={{ top: width * 0.10, marginHorizontal: 10 }}>
                        <View style={custom.labelContainer}>
                          <Text style={{ color: 'grey', fontFamily: 'Poppins-Regular' }}>Select Status</Text>
                        </View>
                        <View style={{ height: height * 0.06, color: 'black', borderRadius: 10, borderColor: 'grey', borderWidth: 1, justifyContent: 'center',backgroundColor:'white'  }}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={custom.inputtext} />
                            <Picker
                              selectedValue={status}
                              onValueChange={(itemValue, itemIndex) =>
                                setStatus(itemValue)
                              }
                              style={{ width: width * 0.8 }}
                            >
                              {selectstatus.map((item, index) => {
                                return (< Picker.Item label={item} value={index} key={index} />);
                              })}
                            </Picker>
                          </View>
                        </View>

                      </View>


                      <View style={{ top: width * 0.15, marginHorizontal: 10 }}>
                        <View style={custom.labelContainer}>
                          <Text style={custom.text}>Follow up Reason</Text>
                        </View>
                        <View style={[custom.inputContainer, { borderWidth: 1, borderRadius: 10,backgroundColor:'white' }]}>
                          <View style={custom.inputtext} />
                          <TextInput
                            placeholder="Enter Your Reason"
                            onChange={(re) => setReason(re)}
                            style={custom.placeholder}
                            placeholderTextColor={'black'}
                            value={reason}
                            keyboardType={'default'}

                          />
                        </View>
                      </View>
                    </View>


                      <View>
                        {
                          FOLLOWUP.map((item) => {
                            return (
                              <View key={item.id}>
                                <View style={{ marginTop: 10 }}>
                                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>

                                    <View style={{ flexDirection: 'row' }}>
                                      <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                        <Phone name='file-signature' size={23} />

                                      </View>
                                      <View style={{ marginLeft: 20 }} key={item.id}>
                                        <Text style={{ fontFamily: 'Poppind-Regular', color: 'black' }}>{item.date}</Text>
                                        <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563' }}>{item.no}</Text>
                                      </View>

                                    </View>

                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                      <Pressable style={{
                                        borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center',
                                        alignItems: 'center', backgroundColor: 'lightgrey'
                                      }} onPress={()=>navigation.navigate('fpcalls')}>
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
                    </ScrollView>







                  </View>
                  : <View />
          }</>
        <>
          {
            (cus === 'customer') ?
              <View style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#facd52',
                position: 'absolute',
                bottom: 20,
                right: 20,
              }}>
                <Pressable onPress={() => navigation.navigate('addcus')} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                  <Phone name='plus' style={{ color: 'white' }} size={35} />
                </Pressable>
              </View>
              : (enq === 'enquiry') ?
                <View style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: '#facd52',
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                }}>
                  <Pressable onPress={() => navigation.navigate('addenquiry')} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Phone name='plus' style={{ color: 'white' }} size={35} />

                  </Pressable>
                </View>
                :
                <View />
          }</>
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
  },
  placeholder: {
    height: height * 0.06,
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
    marginLeft: 10,
    alignSelf: 'center'
  },
  active: {
    marginHorizontal: 10,
    backgroundColor: '#ead4fa',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
    height: 32,
    borderRadius: 100,
    fontFamily: 'Poppins-Regular',
    color: '#111563'
  },
  inactive: {
    marginHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
    height: 32,
    fontFamily: 'Poppins-Regular'
  },
  labelContainer: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 20,
    zIndex: 1,
    elevation: 1,
    shadowColor: "white",
    position: "absolute",
    top: -12,
    backgroundColor: 'white',
    shadowColor: 'white'
  },
  text: {
    color: 'grey',
    fontFamily: 'Poppins-Regular'
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
export default Customer;


