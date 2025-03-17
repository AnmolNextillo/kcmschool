/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import OtpScreen from './src/screens/OTP/OTPScreen';
import BottomBar from './src/navigations/BottomBar';
import ChangePassword from './src/screens/ChangePassword/ChangePassword';
import Event from './src/screens/Events/Event';
import Session from './src/screens/Session/Session';
import ClassMate from './src/screens/ClassMate/ClassMate';
import Gallery from './src/screens/Gallery/Gallery';
import EventDetail from './src/screens/EventDetail/EventDetail';
import HomeWork from './src/screens/HomeWork/HomeWork';
import Conversation from './src/screens/Conversation/Conversation';
import Test from './src/screens/Test/Test';
import Subjects from './src/screens/Subjects.js';
import ApplyLeave from './src/screens/ApplyLeave/index.js';
import LeaveDetails from './src/screens/LeaveDetails/index.js';
import PaymentHistory from './src/screens/PaymentHistory/index.js';
import Appointment from './src/screens/Appointment/index.js';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import TimeTable from './src/screens/TimeTable/index.js';
import HomeWorkList from './src/screens/HomeWork/HomeWorkList.js';
import messaging from '@react-native-firebase/messaging';
import './src/component/firebase.js'
import BookAppointment from './src/screens/BookAppointment/index.js';
import Attendence from './src/screens/Attendence/index.js';

const Stack = createNativeStackNavigator();


function App() {

  // const getFcmToken = async () => {
  //   try {
  //     const newFcmToken = await messaging().getToken();
  //     console.log(newFcmToken);
  //     return newFcmToken;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  // useEffect(()=>{  
  //   getFcmToken()
  // },[])

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password' }} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ title: 'OTP' }} />
          <Stack.Screen name="BottomBar" component={BottomBar} options={{ title: 'BottomBar' }} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'ChangePassword' }} />
          <Stack.Screen name="Event" component={Event} options={{ title: 'Event' }} />
          <Stack.Screen name="Session" component={Session} options={{ title: 'Session' }} />
          <Stack.Screen name="Classmate" component={ClassMate} options={{ title: 'Classmate' }} />
          <Stack.Screen name="Gallery" component={Gallery} options={{ title: 'Gallery' }} />
          <Stack.Screen name="EventDetail" component={EventDetail} options={{ title: 'EventDetail' }} />
          <Stack.Screen name="HomeWork" component={HomeWork} options={{ title: 'HomeWork' }} />
          <Stack.Screen name="Conversation" component={Conversation} options={{ title: 'Conversation' }} />
          <Stack.Screen name="Test" component={Test} options={{ title: 'Test' }} /> 
          <Stack.Screen name="Subjects" component={Subjects} options={{ title: 'Subjects' }} /> 
          <Stack.Screen name="ApplyLeave" component={ApplyLeave} options={{ title: 'ApplyLeave' }} /> 
          <Stack.Screen name="LeaveDetails" component={LeaveDetails} options={{ title: 'LeaveDetails' }} /> 
          <Stack.Screen name="PaymentHistory" component={PaymentHistory} options={{ title: 'PaymentHistory' }} /> 
          <Stack.Screen name="Appointment" component={Appointment} options={{ title: 'Appointment' }} /> 
          <Stack.Screen name="TimeTable" component={TimeTable} options={{ title: 'TimeTable' }} /> 
          <Stack.Screen name="HomeWorkList" component={HomeWorkList} options={{ title: 'HomeWorkList' }} /> 
          <Stack.Screen name="BookAppointment" component={BookAppointment} options={{ title: 'BookAppointment' }} /> 
          <Stack.Screen name="Attendence" component={Attendence} options={{ title: 'Attendence' }} /> 
        </Stack.Navigator>
    </NavigationContainer>
    <FlashMessage position="bottom" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  constainerStyle:{
    flex:1,
    backgroundColor:'black'
  }

});

export default App;
