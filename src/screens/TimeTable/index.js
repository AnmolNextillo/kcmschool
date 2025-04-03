import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appColors} from '../../utils/color';
import {useDispatch, useSelector} from 'react-redux';
import {clearTimeTable, hitTimeTable} from '../../redux/TimeTableSlice';
import WebView from 'react-native-webview';
import {
  clearAnnualCalender,
  hitAnnualCalender,
} from '../../redux/GetAnnualCalender';

const TimeTable = ({navigation, route}) => {
  const {title, from} = route.params;
  const dispatch = useDispatch();
  const responseTimeTable = useSelector(state => state.timeTableReducer.data);
  const responseAnnualCalender = useSelector(
    state => state.annualCalenderReducer.data,
  );
  const [timeTable, setTimeTable] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (from == 0) {
      dispatch(hitTimeTable());
    } else {
      dispatch(hitAnnualCalender());
    }
  }, []);

  useEffect(() => {
    if (responseTimeTable != null && responseTimeTable.status === 1) {
      setTimeTable(responseTimeTable.data);
      console.log(
        'PDf ===> ',
        'https://docs.google.com/gview?embedded=true&url=https://school-project-varun.s3.ap-south-1.amazonaws.com/' +
          responseTimeTable.data.media,
      );
      setLoading(false);
      dispatch(clearTimeTable());
    }
    if (responseAnnualCalender != null && responseAnnualCalender.status == 1) {
      // setTimeTable(responseAnnualCalender)
      setLoading(false);
      dispatch(clearAnnualCalender());
    }
  }, [responseTimeTable, responseAnnualCalender]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 16,
            backgroundColor: appColors.white,
            alignItems: 'center',
          }}>
          <Text
            style={{color: appColors.primaryColor, padding: 8}}
            onPress={() => navigation.goBack()}>
            Back
          </Text>
          <Text style={styles.headerText}>{title}</Text>
        </View>

        {!isLoading?<View style={{flex:1}}>
          {timeTable != null ? (
            <WebView
              style={{flex: 1}}
              source={{
                uri:
                  'https://docs.google.com/gview?embedded=true&url=https://school-project-varun.s3.ap-south-1.amazonaws.com/' +
                  timeTable.media,
              }}
            />
          ):  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:appColors.black,fontSize:18}}>Currently not updated</Text></View>}
        </View>:
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:appColors.black,fontSize:18}}>Loading...</Text></View>
        }
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
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
