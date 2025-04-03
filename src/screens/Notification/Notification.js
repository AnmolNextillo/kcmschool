import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/color';
import {getImage} from '../../utils/getImages';
import {useNavigation} from '@react-navigation/core';
import EventIcon from '../../assets/svg/EventIcon';
import HomeworkIcon from '../../assets/svg/HomeworkIcon';
import TestsIcon from '../../assets/svg/TestsIcons';

const Notification = ({navigation}) => {

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
          <Text style={styles.headerText}>Notification</Text>
        </View>
        <ScrollView style={{padding: 16}}>
          <View style={styles.CardTopStyle}>
            {/* <Text style={styles.AcademicText}>Academics</Text> */}
            <View style={styles.CardStyle}>
              <TouchableOpacity
                style={styles.cardBox}
                onPress={() => navigation.navigate('EventDetail')}>
                <EventIcon/>
                <Text style={styles.cardNameStyle}>Events</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardBox}
                onPress={() => navigation.navigate('HomeWorkList')}>
                <HomeworkIcon/>
                <Text
                  style={styles.cardNameStyle}
                >
                  Homework
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardBox}
                onPress={() => navigation.navigate('Gallery')}>
                <Image
                  source={getImage('booking')}
                  style={styles.imageBoxStyle}
                  resizeMode="contain"
                />{' '}
                <Text style={styles.cardNameStyle}>Gallery</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.CardStyleLeft}>
              <TouchableOpacity style={styles.cardBoxLeft} onPress={() => navigation.navigate('Test')}>
                <TestsIcon/>
                <Text style={styles.cardNameStyle}>Tests</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
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
  },
  imageBoxStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    width: 40,
  },
  CardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    gap: 10,
  },
  CardStyleLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 12,
  },
  cardBoxLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.white,
    marginBottom: 12,
    width: '30%',
    paddingHorizontal: 4,
    paddingVertical: 20,
    borderRadius: 8,
    boxShadow: ' -2px 2px 14px 0px rgb(245, 242, 242)',
    alignSelf: 'flex-start',
  },
});
