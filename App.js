import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/splash';
import WelcomePage from './src/welcome';
import Login from './src/login';
import Register from './src/register';
import Customer from './src/customer';
import AddCustomer from './src/addcustomer';
import Enquires from './src/newenquires';
import AddEnquiry from './src/addenquiry';
const Stack = createNativeStackNavigator();

const App = () => {
 
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name='welcome' component={WelcomePage} options={{ headerShown: false }} />
          <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
          <Stack.Screen name='customer' component={Customer} options={{ headerShown: false }} />
          <Stack.Screen name='addcus' component={AddCustomer} options={{ headerShown: false }} />
          <Stack.Screen name='enquirey' component={Enquires} options={{ headerShown: false }} />
          <Stack.Screen name='addenquiry' component={AddEnquiry} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;
