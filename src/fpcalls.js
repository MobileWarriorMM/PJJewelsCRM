import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, Linking, StatusBar, Pressable, ScrollView, Modal } from 'react-native';
import Users from './assets/images/user.svg';
import Arrow from 'react-native-vector-icons/Feather';
import Phone from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CalendarList,DatePicker} from "react-native-common-date-picker";



const Fpcalls = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [mobno, setMobileno] = useState();
    const [pass, setPass] = useState();
    const [checked, setChecked] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const[data,setDate]=useState();

    return (
        <View style={fpcall.mainContainer}>
            <StatusBar translucent backgroundColor='transparent' />
            <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
            <View style={{height:height,width:width,backgroundColor:'#193ea5',position:'absolute',opacity:0.3}}/>
      <View  style={{ flexDirection: 'row', marginHorizontal: 20, top: -100,justifyContent:'space-between' }}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={() => navigation.goBack()}><Arrow name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>FOLLOW UP CALLS</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={[fpcall.notify, { marginHorizontal: 5 }]}>
              <Phone name='bell' size={15} color={'black'} />
            </View>
            <Pressable style={fpcall.notify} onPress={()=>navigation.navigate('profile')}>
              <Phone name='user' size={15} color={'black'} />
            </Pressable>
        </View>
      </View>
            <Modal
                style={{ height: height * 1.6 }}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                onBackdropPress={() => { setModalVisible(!modalVisible) }}
                onAccessibilityTap={() => setModalVisible(false)}
                statusBarTranslucent={true}

            >
                <View style={fpcall.centeredView}>
                    <View style={fpcall.modalView}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Pressable style={{ width: 60, height: 60, borderRadius: 100, backgroundColor: 'black', top: -25, alignItems: 'center', justifyContent: 'center' }} onPress={() => setModalVisible(!modalVisible)}>
                                <Arrow name='x' color={'white'} size={40} />
                            </Pressable>
                        </View>


{/* <DatePicker
    confirm={date => {
        console.warn(date)
    }}
/> */}


<View style={{top:-25}}>
<CalendarList
       //   containerStyle={{flex: 1}}
         // cancel={() => this.setState({visible: false})}
          confirm={date => {
              setDate(date)
            console.warn(date)    
          }}
         horizontal={true}
         minDate={'2022-01-01'} 
         maxDate={'2040-12-31'}
         showsHorizontalScrollIndicator={false}
         paggingEnabled={true}
         weeks={['S','M','T','W','T','F','S']}
         weekTextStyle={{color:'lightgrey',fontSize:5}}
         headerTitleType={2}
         firstDayOnWeeks={0}
         confirmText={'send'}
         toolBarPostition={'bottom'}
         cancelDisabled={true}
         selectedTextColor={'white'}
         listItemStyle={     {
            headerTitleContainer: {
                height: 40,
            },
            dayContent: {
                backgroundColor: 'white',
            },
            day: {
                color: 'black',
            },
         }}
         showToolBar={false}
         selectedDateMarkType={'square'}
         beyondDatesDisabled={true}
         selectedDateMarkColor={'#f76ae9'}
         monthDisplayMode={'en-long'}
         
     />
</View>
<View style={{ alignItems: 'center'}}>
                            <Pressable style={[fpcall.button,{width:80,height:30,top:-15}]} onPress={() =>console.log('selected data.....',data)}>
                                <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Poppins-Bold' }}>ADD</Text>
                            </Pressable>
                        </View>

                       <View style={{marginHorizontal:20,top:-12}}>
                       <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                <View style={{ width: 6, height: 6, backgroundColor: '#fcb103', borderRadius: 100, marginRight: 10, }} />
                                <View>
                                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563', fontSize: 14 }}>1st Date</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>March 10,2022</Text>
                                </View>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Pressable style={{ height: 20, width: 20, backgroundColor: 'grey',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                <Arrow name='minus' color={'white'}/>
                            </Pressable>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'lightgrey', height: 1,marginVertical: 3 }} />



                        <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
                            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                <View style={{ width: 6, height: 6, backgroundColor: '#fcb103', borderRadius: 100, marginRight: 10, }} />
                                <View>
                                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563', fontSize: 14 }}>2nd Date</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>March 10,2022</Text>
                                </View>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Pressable style={{ height: 20, width: 20, backgroundColor: 'grey',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                                <Arrow name='minus' color={'white'}/>
                            </Pressable>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'lightgrey', height: 1,marginVertical: 3 }} />
                       </View>
                        <View style={{ alignItems: 'center'}}>
                            <Pressable style={fpcall.button} onPress={() =>console.log('selected data.....',data)}>
                                <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Poppins-Bold' }}>UPDATE</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>


            <View style={fpcall.subcontainer}>

                <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular',color:'grey' }}>CUSTOMER ID</Text>
                        <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>CUS1001</Text>
                        <View style={{ height: 0.5, width: width - 40, backgroundColor: 'lightgrey', marginVertical: 5 }} />
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular',color:'grey'  }}>ITEM NO</Text>
                        <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>ITEM002</Text>
                        <View style={{ height: 0.5, width: width - 40, backgroundColor: 'lightgrey', marginVertical: 5 }} />
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontFamily: 'Poppins-Regular',color:'grey'  }}>CONTACT NUMBER</Text>
                                <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>9987654321</Text>
                            </View>
                            <Pressable style={{ justifyContent: 'center', marginRight: 10 }}
                             onPress={()=>Linking.openURL(`tel:6385414805`)}><Arrow name='phone-call' size={22} color={'#fcb103'} /></Pressable>
                        </View>
                        <View style={{ height: 0.5, width: width - 40, backgroundColor: 'lightgrey', marginVertical: 5 }} />

                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular',color:'grey'  }}>WEIGHT</Text>
                        <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>12.2gm</Text>
                        <View style={{ height: 0.5, width: width - 40, backgroundColor: 'lightgrey', marginVertical: 5 }} />
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular',color:'grey'  }}>SALES EMPLOYEE</Text>
                        <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>Sathishkumar</Text>
                        <View style={{ height: 0.5, width: width - 40, backgroundColor: 'lightgrey', marginVertical: 5 }} />
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular',color:'grey'  }}>STATUS</Text>
                        <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>Open</Text>
                        <View style={{ height: 0.5, width: width - 40, backgroundColor: 'lightgrey', marginVertical: 5 }} />
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular',color:'grey'  }}>ESTIMATED PRICE</Text>
                        <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>35.800</Text>
                        <View style={{ height: 0.5, width: width - 40, backgroundColor: 'lightgrey', marginVertical: 5 }} />
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular',color:'grey'  }}>FOLLOW UP REASON</Text>
                        <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>NULL</Text>
                        <View style={{ height: 0.5, width: width - 40, backgroundColor: 'lightgrey', marginVertical: 5 }} />
                    </View>


                    <View style={{ height: height * 0.25, backgroundColor: '#d7f9fc', borderRadius: 10 }}>
                        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563' }}>Follow up Details</Text>
                                    <Pressable style={{ backgroundColor: '#fcb103', borderRadius: 5, justifyContent: 'center' }}
                                     onPress={() => setModalVisible(true)}>
                                        <Arrow name='plus' size={22} style={{ padding: 2 }} color={'white'} />
                                    </Pressable>
                                </View>


                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, width: width }}>
                                        <View style={{ width: 6, height: 6, backgroundColor: '#fcb103', borderRadius: 100, marginRight: 10 }} />
                                        <View>
                                            <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563', fontSize: 14 }}>1st Date</Text>
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11,color:'grey'  }}>March 10,2022</Text>
                                            <View style={{ backgroundColor: 'lightgrey', height: 1, width: width - 100, marginVertical: 3 }} />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, width: width }}>
                                        <View style={{ width: 6, height: 6, backgroundColor: '#fcb103', borderRadius: 100, marginRight: 10 }} />
                                        <View>
                                            <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563', fontSize: 14 }}>2nd Date</Text>
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11,color:'grey'  }}>March 10,2022</Text>
                                            <View style={{ backgroundColor: 'lightgrey', height: 1, width: width - 100, marginVertical: 3 }} />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, width: width }}>
                                        <View style={{ width: 6, height: 6, backgroundColor: '#fcb103', borderRadius: 100, marginRight: 10 }} />
                                        <View>
                                            <Text style={{ fontFamily: 'Poppins-Bold', color: '#111563', fontSize: 14 }}>3rd Date</Text>
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11,color:'grey'  }}>March 10,2022</Text>
                                            <View style={{ backgroundColor: 'lightgrey', height: 1, width: width - 100, marginVertical: 3 }} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    );
}
const { width, height } = Dimensions.get('window');

const fpcall = StyleSheet.create({
    mainContainer: {
        height: height * 1.5,
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
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
    },
    modalView: {
        height: height * 0.75,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    button: {
        backgroundColor: '#fcb103',
        height: height * 0.07,
        width: width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: 'black',
        elevation: 6,

    },
})
export default Fpcalls;