import React from "react";
import {View,ImageBackground,StatusBar} from 'react-native';

const Splash=({navigation})=>{

  
    setTimeout (()=>{
        navigation.replace('login')
      },3000);
       

    return(
        <View>
            <StatusBar translucent backgroundColor='transparent' />
            <ImageBackground source={require('./assets/images/splash-dark.png')} style={{width: '100%',height: '100%'}}/>    
        </View>
    );
}
export default Splash;  