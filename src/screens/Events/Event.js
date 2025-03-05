import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {appColors} from '../../utils/color';

const Event = () => {
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
          <Text style={styles.headerText}>Event</Text>
        </View>
        <View style={{padding: 16}}>
            <Text style={{fontSize:15,marginBottom:4,fontWeight:'500'}}>School</Text>
            <Text style={{fontSize:14,marginBottom:20}}>abcdefghijklmnopqrstuvwxyz</Text>
            <Text style={{fontSize:15,fontWeight:'500',marginBottom:4}}>Event Date</Text>
            <Text style={{fontSize:14,}}>1-1-25</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Event;

const styles = StyleSheet.create({
    headerText: {
        color: appColors.black,
        fontWeight: '500',
        marginRight: 16,
        textAlign: 'center',
        flex: 1,
        fontSize: 16,
      },
});
