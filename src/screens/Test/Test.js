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

const Test = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const responseTests = useSelector(state => state.getTestsReducer.data);

  const [tests, setTest] = useState(null);

  useEffect(() => {
    dispatch(hitTests());
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
        {' '}
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
          <Text style={styles.headerText}>Tests</Text>
        </View>
        <ScrollView style={{padding: 16}}>
          {tests != null &&
            tests.map((item, index) => (
              <TouchableOpacity style={styles.testList} onPress={()=>navigation.navigate("TestDetail",{data:item})}>
              <Text >
                {index + 1}. {item.title} {'(' + item.subjectId.name + ')'}
              </Text>
              <Text style={{marginTop:8,color:appColors.grey}}>Date : {item.date}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Test;

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
