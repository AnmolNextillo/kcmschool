import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Button,
  ActivityIndicator,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { appColors } from '../../utils/color';
import ArrowRight from '../../assets/svg/ArrowIcon';
import BottomListModal from '../../component/BottomListModal';
import { useDispatch, useSelector } from 'react-redux';
import { clearApplyLeave, hitApplyLeave } from '../../redux/ApplyLeaveSlice';
import moment from 'moment';
import { handleShowMessage } from '../../utils/Constants';

const ApplyLeave = ({ navigation }) => {
  const [leaveType, setLeaveType] = useState('Select Leave Type');
  const [menuVisible, setMenuVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const data = ['Sick Leave', 'Casual Leave'];

  const dispatch = useDispatch()
  const responseApplyLeave = useSelector((state) => state.applyLeaveReducer.data)

  const handleSubmit = () => {
    if (leaveType == 'Select Leave Type') {
      handleShowMessage("Please select leave type.", "danger")
    }
    else if (reason == '') {
      handleShowMessage("Please enter reason.", "danger")
    } else {
      const payload = {
        startDate: moment(startDate.toISOString().split("T")[0]).format("DD-MMM-YY"),
        endDate: moment(endDate.toISOString().split("T")[0]).format("DD-MMM-YY"),
        type: leaveType == "Sick Leave" ? 2 : 1,
        reason: reason
      }
      dispatch(hitApplyLeave(payload))
    }
  };

  useEffect(() => {
    if (responseApplyLeave != null && responseApplyLeave.status == 1) {
      handleShowMessage("Leave Applied Successfully.", "success")
      setReason("")
      setStartDate(new Date())
      setEndDate(new Date())
      dispatch(clearApplyLeave())
    } else {
      if (responseApplyLeave != null) {
        handleShowMessage(responseApplyLeave.message, "danger")
      }
    }
  }, [responseApplyLeave])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          backgroundColor: appColors.white,
        }}>
        <Text
          style={{ color: appColors.primaryColor }}
          onPress={() => navigation.goBack()}>
          Back
        </Text>
        <Text style={styles.headerText}>Apply Leave</Text>
      </View>

      <View style={styles.container}>
        {/* Leave Type Dropdown */}
        <View style={{ borderColor: appColors.black, borderWidth: 1, borderRadius: 8, padding: 16, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ flex: 1, color: appColors.black }} onPress={() => setMenuVisible(true)}>{leaveType}</Text>
          <TouchableOpacity style={{ transform: [{ rotate: '90deg' }] }} onPress={() => setMenuVisible(true)}>
            <ArrowRight />
          </TouchableOpacity>
        </View>

        {/* Start Date Picker */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.label}>Start Date </Text>
            <DateTimePicker
              style={styles.datePicker}
              mode="date"
              value={startDate}
              placeholder="Select End Date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onChange={(event, date) => setStartDate(date)} />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.label}>End Date</Text>
            <DateTimePicker
              style={styles.datePicker}
              mode="date"
              value={endDate}
              placeholder="Select End Date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onChange={(event, date) => setEndDate(date)} />
          </View>

        </View>



        {/* End Date Picker */}


        {/* <DatePicker
          style={styles.datePicker}
          date={endDate}
          mode="date"
          placeholder="Select End Date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={date => setEndDate(date)}
        /> */}

        {/* Reason Input */}
        <TextInput
          style={styles.input}
          placeholder="Reason for leave"
          value={reason}
          onChangeText={setReason}
          multiline
        />

        {/* Submit Button */}
        {/* <TouchableOpacity style={{padding:16,backgroundColor:appColors.primaryColor,borderRadius:8,alignItems:'center'}}>
        <Text
          onPress={handleSubmit}
          style={{ backgroundColor: appColors.primaryColor,fontWeight:'600',color:appColors.white }}>
          Apply Leave
        </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={{ padding: 16, backgroundColor: appColors.primaryColor, borderRadius: 8, alignItems: 'center' }}
          onPress={() => handleSubmit()}>
          {!isLoading ? (
            <Text style={{ backgroundColor: appColors.primaryColor, fontWeight: '600', color: appColors.white }}>Apply Leave</Text>
          ) : (
            <ActivityIndicator
              size="small"
              color={appColors.white}
              style={{ margin: 15 }}
            />
          )}
        </TouchableOpacity>
        <BottomListModal isModalVisible={menuVisible} setModalVisible={setMenuVisible} data={data} setLeaveType={setLeaveType} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: appColors.white,
    marginHorizontal: 16,
    marginVertical: 24,
    borderRadius: 16,
  },
  dropdown: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
  },
  datePicker: {
    width: '100%',
    marginVertical: 16,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    height: 100,
  },
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default ApplyLeave;
