import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/color';
import {useNavigation} from '@react-navigation/core';

const Test = () => {
  const navigation = useNavigation();

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
          <Text style={styles.testList}>Test 1</Text>
          <Text style={styles.testList}>Test 2</Text>
          <Text style={styles.testList}>Test 3</Text>
          <Text style={styles.testList}>Test 4</Text>
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
    padding:16,
    backgroundColor:appColors.white,
    borderRadius:8
  },
});
