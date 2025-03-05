import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { appColors } from '../../utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { clearTimeTable, hitTimeTable } from '../../redux/TimeTableSlice';
import WebView from 'react-native-webview';

const TimeTable = ({navigation}) => {

    const dispatch = useDispatch()
    const responseTimeTable = useSelector((state)=>state.timeTableReducer.data)
    const [timeTable,setTimeTable] = useState(null)

    useEffect(()=>{
        dispatch(hitTimeTable())
    },[])

    useEffect(()=>{
        if(responseTimeTable!=null && responseTimeTable.status ===1){
            setTimeTable(responseTimeTable.data)
            console.log("PDf ===> ","https://docs.google.com/gview?embedded=true&url=https://school-project-varun.s3.ap-south-1.amazonaws.com/"+responseTimeTable.data.media )
        }
        dispatch(clearTimeTable())
    },[])
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
          <Text style={styles.headerText}>Time Table</Text>
        </View>
        
      {timeTable!=null&&
      <WebView style={{flex:1}} source={{ uri: "https://docs.google.com/gview?embedded=true&url=https://school-project-varun.s3.ap-south-1.amazonaws.com/"+timeTable.media }} />} 
      </View>
     
    </SafeAreaView>
  );
};

export default TimeTable;

const styles = StyleSheet.create({
    headerText: {
        color: appColors.black,
        fontWeight: '500',
        marginRight: 16,
        textAlign: 'center',
        flex: 1,
        fontSize: 16,
      },
      pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
