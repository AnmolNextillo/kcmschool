import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Card, Badge} from 'react-native-paper';
import {appColors} from '../../utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { hitGetAppointments } from '../../redux/GetAppointmentsSlice';

const Appointment = ({navigation}) => {


  const dispatch = useDispatch()
  const responseAppointment = useSelector((state)=>state.getAppointmentsReducer.data)

  const [appointmentData,setAppointmentData] = useState(null)

  useEffect(()=>{
    dispatch(hitGetAppointments())
  },[])

  useEffect(()=>{
    if(responseAppointment!=null && responseAppointment.status ==1){
      setAppointmentData(responseAppointment.data)
    }
  },[responseAppointment])

  // const appointmentData = [
  //   {
  //     id: '1',
  //     doctor: 'Dr. John Doe',
  //     date: '2025-02-18',
  //     time: '10:00 AM',
  //     status: 'Confirmed',
  //   },
  //   {
  //     id: '2',
  //     doctor: 'Dr. Sarah Smith',
  //     date: '2025-02-20',
  //     time: '02:30 PM',
  //     status: 'Pending',
  //   },
  //   {
  //     id: '3',
  //     doctor: 'Dr. Emily Brown',
  //     date: '2025-02-25',
  //     time: '04:00 PM',
  //     status: 'Canceled',
  //   },
  // ];

  const getStatusColor = status => {
    switch (status) {
      case 1:
        return 'green';
      case 0:
        return 'orange';
      case 2:
        return 'red';
      default:
        return 'gray';
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={{flex: 1}}>
        <Text style={styles.doctor}>{item.description}</Text>
        <Text style={styles.date}>
          {item.date}
        </Text>
      </View>
      <Text
          style={[
            styles.badge,
            {backgroundColor: getStatusColor(item.status)},
          ]}>
          {item.status==0?"Pending":item.status==1?"Confirmed":"Canceled"}
        </Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          paddingVertical:8,
          backgroundColor: appColors.white,
          alignItems:'center'
        }}>
        <Text
          style={{color: appColors.primaryColor}}
          onPress={() => navigation.goBack()}>
          Back
        </Text>
        <Text style={styles.headerText}>Appointments</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("BookAppointment")}>
        <Text style={{color:appColors.primaryColor,fontSize:28}}>+</Text>
        </TouchableOpacity>
       
      </View>
      <View style={styles.container}>
        <FlatList
          data={appointmentData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: appColors.white,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  doctor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  badge: {
   
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: 'white',
  },
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
});

export default Appointment;
