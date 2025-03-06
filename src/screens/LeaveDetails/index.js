import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Card, Badge} from 'react-native-paper';
import { appColors } from '../../utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { hitGetLeave } from '../../redux/GetLeaveSlice';

const LeaveDetails = ({navigation}) => {

  const dispatch = useDispatch()

  const responseLeave = useSelector((state)=>state.getLeaveReducer.data)

  const [leaveData,setLeaveData] =useState(null)

  useEffect(()=>{
    dispatch(hitGetLeave())
  },[])

  useEffect(()=>{
    if(responseLeave!=null && responseLeave.status == 1){
      setLeaveData(responseLeave.data)
    }
  },[responseLeave])

  // const leaveData = [
  //   {
  //     id: '1',
  //     type: 'Sick Leave',
  //     startDate: '2025-02-20',
  //     endDate: '2025-02-22',
  //     status: 'Approved',
  //   },
  //   {
  //     id: '2',
  //     type: 'Casual Leave',
  //     startDate: '2025-03-01',
  //     endDate: '2025-03-03',
  //     status: 'Pending',
  //   },
  //   {
  //     id: '3',
  //     type: 'Annual Leave',
  //     startDate: '2025-04-15',
  //     endDate: '2025-04-20',
  //     status: 'Rejected',
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
        <Text style={styles.leaveType}>{item.type==1?"Casual Leave":"Sick Leave"}</Text>
        <Text style={styles.date}>
          {item.reason}
        </Text>
        <Text style={styles.date}>
          {item.startDate} → {item.endDate}
        </Text>
        <Text
          style={[
            styles.badge,
            {backgroundColor: getStatusColor(item.status),padding:8},
          ]}>
          {item.status==0?"Pending":item.status==1?"Approved":"Rejected"}
        </Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          backgroundColor: appColors.white,
        }}>
        <Text
          style={{color: appColors.primaryColor}}
          onPress={() => navigation.goBack()}>
          Back
        </Text>
        <Text style={styles.headerText}>Leave Details</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={leaveData}
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
    backgroundColor:appColors.white
  },
  leaveType: {
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
    alignSelf: 'flex-start',
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

export default LeaveDetails;
