import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
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
import app from '../../component/firebase';
import { clearAppointment, hitBookAppointment } from '../../redux/BookAppointmentSlice';

const BookAppointment = ({ navigation }) => {
  const [leaveType, setLeaveType] = useState('With Whom');
  const [menuVisible, setMenuVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const data = ['Class Teacher', 'Principal'];

  const dispatch = useDispatch()
  const responseBookAppointment = useSelector((state) => state.bookAppointmentReducer.data)

  const handleSubmit = () => {
    if (leaveType == 'With Whom?') {
      handleShowMessage("Please select with whom you want appointment.", "danger")
    }
    else if (reason == '') {
      handleShowMessage("Please enter description.", "danger")
    } else {
      const payload = {
        date: moment(startDate.toISOString().split("T")[0]).format("DD-MMM-YY"),
        withWhom: leaveType == "Principal" ? 1 : 2,
        description: reason
      }
      dispatch(hitBookAppointment(payload))
    }
  };

  useEffect(() => {
    if (responseBookAppointment != null && responseBookAppointment.status == 1) {
      handleShowMessage("Leave Applied Successfully.", "success")
      setReason("")
      setStartDate(new Date())
      setEndDate(new Date())
      dispatch(clearAppointment())
    } else {
      if (responseBookAppointment != null) {
        handleShowMessage(responseBookAppointment.message, "danger")
      }
    }
  }, [responseBookAppointment])

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
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}> */}
          <View style={{alignItems: 'center',flexDirection:'row',marginVertical:8 }}>
            <Text style={{color:appColors.black,marginVertical:16,fontSize:18}}>Select Date:- </Text>
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
          {/* <View style={{ flex: 1, alignItems: 'center' }}>
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
          </View> */}

        {/* </View> */}



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
          placeholder="Description"
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
            <Text style={{ backgroundColor: appColors.primaryColor, fontWeight: '600', color: appColors.white }}>Book Appointment</Text>
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

export default BookAppointment;
