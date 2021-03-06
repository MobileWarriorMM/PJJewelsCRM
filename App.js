import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/splash';
import WelcomePage from './src/welcome';
import Login from './src/login';
import Register from './src/register';
import Customer from './src/customer';
import AddCustomer from './src/addcustomer';
import AddEnquiry from './src/addenquiry';
import InvoiceList from './src/invoicelist';
import InvoiceDetail from './src/invoicedetail';
import Profile from './src/profile';
import ReportList from './src/reportlist';
import Fpcalls from './src/fpcalls';
import Report from './src/reports';
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
          <Stack.Screen name='addenquiry' component={AddEnquiry} options={{ headerShown: false }} />
          <Stack.Screen name='invoicelist' component={InvoiceList} options={{ headerShown: false }} />
          <Stack.Screen name='invoicedetail' component={InvoiceDetail} options={{ headerShown: false }} />
          <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name='reportlist' component={ReportList} options={{ headerShown: false }} />
          <Stack.Screen name='report' component={Report} options={{ headerShown: false }} />
          <Stack.Screen name='fpcalls' component={Fpcalls} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;
