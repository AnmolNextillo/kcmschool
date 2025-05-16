import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appColors} from '../../utils/color';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {hitTests} from '../../redux/GetTestsSlice';
import { hitGetNotification } from '../../redux/GetNotificationSlice';

const NotificationList = ({navigation,route}) => {

    const {from} = route.params

  const dispatch = useDispatch();

  const responseTests = useSelector(state => state.getNotificationReducer.data);

  const [tests, setTest] = useState(null);

  useEffect(() => {
    const payload = {
        type:from
    }
    dispatch(hitGetNotification(payload));
  }, []);

  useEffect(() => {
    console.log('responseTests test ===>', responseTests);
    if (responseTests != null && responseTests.status == 1) {
      setTest(responseTests.data);
    }
  }, [responseTests]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
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
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        {tests!=null && tests.length>0?<ScrollView style={{padding: 16}}>
          {tests != null &&
            tests.map((item, index) => (
              <TouchableOpacity style={styles.testList} 
            //   onPress={()=>navigation.navigate("TestDetail",{data:item})}
              >
              <Text >
                {item.title}
              </Text>
              <Text style={{marginTop:8,color:appColors.grey}}>{item.message}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>:
            <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
                <Text> Notification not available.
                    </Text></View>}
      </View>
    </SafeAreaView>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  testList: {
    fontSize: 14,
    marginBottom: 8,
    padding: 16,
    backgroundColor: appColors.white,
    borderRadius: 8,
  },
});
