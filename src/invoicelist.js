import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TextInput, StatusBar, Pressable, ScrollView } from 'react-native';
import Calender from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import Phone from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/Feather';

const InvoiceList = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [mobno, setMobileno] = useState();
    const [pass, setPass] = useState();
    const [mydate, setDate] = useState(new Date());
    let [displaymode, setMode] = useState();

    var DATA = [
        {
            id: 1,
            name: 'SathisKumar',
            status: 'Pending'
        },
        {
            id: 2,
            name: 'MuthuKumar',
            status: 'Rejected'
        },
        {
            id: 3,
            name: 'MuthuKumar',
            status: 'Approved'
        },
        {
            id: 4,
            name: 'Ashok',
            status: 'Pending'
        },
        {
            id: 5,
            name: 'Ashok',
            status: 'Pending'
        },


    ];



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

    const List = () => {

        return DATA.map((item) => {
            return (
                <View style={{ marginHorizontal: 20 }} key={item.id}>
                    <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: 'black', borderWidth: 0.5, borderRadius: 7 }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: 'lightblue', width: 35, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <Phone name='user' size={23} />

                                </View>
                                <View style={{ marginLeft: 20 }} key={item.id}>
                                    <Text style={{ fontFamily: 'Poppind-Regular', color: 'black' }}>{item.name}</Text>
                                    {
                                        (item.status === 'Pending') ?
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ backgroundColor: '#faa702', borderRadius: 100, width: 10, height: 10, marginRight: 5 }} />
                                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#111563' }}>{item.status}</Text>
                                            </View>
                                            : (item.status === 'Approved') ?
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <View style={{ backgroundColor: 'green', borderRadius: 100, width: 10, height: 10, marginRight: 5 }} />
                                                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#111563' }}>{item.status}</Text>
                                                </View>
                                                : (item.status === 'Rejected') ?
                                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={{ backgroundColor: 'red', borderRadius: 100, width: 10, height: 10, marginRight: 5 }} />
                                                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#111563' }}>{item.status}</Text>
                                                    </View>
                                                    : <View />

                                    }


                                </View>

                            </View>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Pressable style={{ borderColor: 'grey', borderWidth: 0.4, width: 25, height: 25, borderRadius: 100, justifyContent: 'center',
                                 alignItems: 'center', backgroundColor: 'lightgrey' }} onPress={()=>navigation.navigate('invoicedetail')}>
                                    <Phone name='chevron-right' style={{ color: 'grey' }} size={15} />

                                </Pressable>

                            </View>

                        </View>

                    </View>

                </View>
            )
        });

    }



    return (
        <View style={invoice.mainContainer}>
            <StatusBar translucent backgroundColor='transparent' />
            <Image source={require('./assets/images/Layer.png')} style={{ height: height * 0.18, width: width - 195 }} />
            <View style={{height:height,width:width,backgroundColor:'#193ea5',position:'absolute',opacity:0.3}}/>
      <View  style={{ flexDirection: 'row', marginHorizontal: 20, top: -100,justifyContent:'space-between' }}>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={() => navigation.goBack()}><Arrow name='arrow-left' size={25} color={'white'} style={{ marginRight: 7 }} /></Pressable>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Bold' }}>INVOICE LIST</Text>
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

                <View style={{ backgroundColor: 'lightblue', height: height * 0.11, width: width, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                    <View style={{ marginHorizontal: 15, marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', height: height * 0.060, borderRadius: 10, marginRight: 6, flex: 1, backgroundColor: 'white', }}>
                            <Text style={{ color: 'black', marginLeft: 20, fontFamily: 'Poppins-Regular' }}>19-04-2022  </Text>
                        </View>
                        <View>
                            <Pressable style={{ backgroundColor: '#faa702', borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: width * 0.14, height: height * 0.060 }}
                                onPress={() => displayDatepicker('date')}>
                                <Calender name='calendar' color={'white'} size={30} />
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
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 15 }}>
                    <Text style={{ color: '#111563', fontFamily: 'Poppins-Bold' }}>Invoice List</Text>
                    <Text style={{ color: '#faa702', fontFamily: 'Poppins-Regular' }}>25 April 2022</Text>


                </View>

                <ScrollView horizontal={false} style={{ height: height }}>{List()}</ScrollView>

                <View style={{width:width,height:35,justifyContent:'center',alignItems:'center',marginBottom:50,paddingBottom:10}}>
                    <Text style={{color:'grey',fontFamily:'Poppins-Regular'}}>Powered  by
                     <Text style={{fontFamily:'Poppins-Bold',color:'grey'}}> Avaniko</Text></Text></View>
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
})
export default InvoiceList;


