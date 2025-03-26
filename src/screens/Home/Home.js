import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {appColors} from '../../utils/color';
import HomeProfileIcon from '../../assets/svg/HomeProfileIcon';
import {getImage} from '../../utils/getImages';
import {useNavigation} from '@react-navigation/core';
import AttendenceIcon from '../../assets/svg/AttendenceIcon';
import EventIcon from '../../assets/svg/EventIcon';
import TimeTableIcon from '../../assets/svg/TimeTableIcon';
import TestsIcon from '../../assets/svg/TestsIcons';
import ClassmatesIcon from '../../assets/svg/ClassmatesIcon';
import SubjectIcon from '../../assets/svg/SubjectIcon';
import HomeworkIcon from '../../assets/svg/HomeworkIcon';
import AnnoucementIcon from '../../assets/svg/AnnoucementIcon';
import AppointmentIcon from '../../assets/svg/AppointmentIcon';
import ApplyLeaveIcon from '../../assets/svg/ApplyLeaveIcon';
import LeaveDetailIcon from '../../assets/svg/LeaveDetailIcon';
import AnnualCalenderIcon from '../../assets/svg/AnnualCalenderIcon';
import PaymentHistoryIcon from '../../assets/svg/PaymentHistoryIcon';
import OnlinePaymentIcon from '../../assets/svg/OnlinePaymentIcon';
import { hitProfile } from '../../redux/GetProfileSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const responseProfile = useSelector((state) => state.getProfileReducer.data) 
  
  const [profileData,setProfileData] = useState(null)

    useEffect(()=>{
      dispatch(hitProfile())
    },[])

      useEffect(()=>{
        if(responseProfile!=null && responseProfile.status == 1){
          setProfileData(responseProfile.data)
        }
      },[responseProfile])

  return (
    <SafeAreaView style={styles.containerStyle}>
      <ScrollView
        style={styles.containerScrollStyle}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerStyle}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.profileImage}>
              <HomeProfileIcon style={{fill: appColors.white}} />
            </View>
            <Text style={styles.userName}>{profileData!=null?profileData.name:""}</Text>
            <Text style={styles.admissionText}>Class :{profileData!=null?profileData.classId.name:""}</Text>
            {/* <Text style={styles.admissionText}>Parent</Text> */}
          </View>
        </View>
        <View style={styles.CardTopStyle}>
          <Text style={styles.AcademicText}>Academics</Text>
          <View style={styles.CardStyle}>
            <TouchableOpacity style={styles.cardBox}  onPress={() => navigation.navigate('Attendence')}>
              <View style={styles.imageBoxStyle}>
                <AttendenceIcon />
              </View>

              <Text style={styles.cardNameStyle}>Attendance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('Classmate')}>
              <ClassmatesIcon />
              <Text style={styles.cardNameStyle}>Classmates</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('Subjects')}>
              <SubjectIcon />
              <Text style={styles.cardNameStyle}>Subjects</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.CardStyle}>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('Test')}>
              <TestsIcon />
              <Text style={styles.cardNameStyle}>Tests</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('TimeTable',{title:"Time Table",from:0})}>
              <TimeTableIcon />
              <Text style={styles.cardNameStyle}>Time Table</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('HomeWorkList')}>
              <HomeworkIcon />
              <Text style={styles.cardNameStyle}>Homework</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CardTopStyle}>
          <Text style={styles.AcademicText}>Communication</Text>
          <View style={styles.CardStyle}>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('Conversation')}>
              <AnnoucementIcon />
              <Text style={styles.cardNameStyle}>Annoucements</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('EventDetail')}>
              <EventIcon />
              <Text style={styles.cardNameStyle}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('Appointment')}>
              <AppointmentIcon />
              <Text style={styles.cardNameStyle}>Apppointment</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CardTopStyle}>
          <Text style={styles.AcademicText}>Leave</Text>
          <View style={styles.CardStyle}>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('ApplyLeave')}>
              <ApplyLeaveIcon />
              <Text style={styles.cardNameStyle}>Apply Leave</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardBox}
              onPress={() => navigation.navigate('LeaveDetails')}>
              <LeaveDetailIcon />
              <Text style={styles.cardNameStyle}>Leave Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBox} onPress={() => navigation.navigate('TimeTable',{title:"Annual Calendar",from:1})}>
              <AnnualCalenderIcon />
              <Text style={styles.cardNameStyle}>Annual Calendar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CardTopStyle}>
          <Text style={styles.AcademicText}>Fees</Text>
          <View style={styles.CardStyleLeft}>
            <TouchableOpacity
              style={styles.cardBoxLeft}
              onPress={() => navigation.navigate('PaymentHistory')}>
              <PaymentHistoryIcon />
              <Text style={styles.cardNameStyle}>Payment History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBoxLeft}>
              <OnlinePaymentIcon />
              <Text style={styles.cardNameStyle}>Online Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: appColors.offWhite,
    paddingBottom: 80,
  },
  containerScrollStyle: {
    flex: 1,
    backgroundColor: appColors.offWhite,
  },
  headerStyle: {
    backgroundColor: appColors.bgBlack,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  profileImage: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: appColors.white,
    borderRadius: 6,
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  userName: {
    fontSize: 18,
    marginBottom: 6,
    color: appColors.primaryColor,
    fontWeight: '500',
  },
  admissionText: {
    fontSize: 16,
    marginBottom: 4,
    color: appColors.white,
    fontWeight: '300',
  },
  CardTopStyle: {
    padding: 16,
    paddingBottom: 0,
  },
  AcademicText: {
    fontSize: 16,
    marginBottom: 14,
    fontWeight: '500',
  },
  CardStyle: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    gap: 12,
  },
  cardBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: appColors.white,
    marginBottom: 12,
    width: '30%',
    paddingHorizontal: 4,
    paddingVertical: 20,
    borderRadius: 8,
    boxShadow: ' -2px 2px 14px 0px rgb(245, 242, 242)',
  },
  cardNameStyle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: appColors.primaryColor,
  },
  imageBoxStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  CardStyleLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 12,
    gap: 12,
    width: '100%',
    marginBottom:40
  },
  cardBoxLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.white,
    marginBottom: 12,
    width: '31%',
    paddingHorizontal: 4,
    paddingVertical: 20,
    borderRadius: 8,
    boxShadow: ' -2px 2px 14px 0px rgb(245, 242, 242)',
    alignSelf: 'flex-start',
  },
});
