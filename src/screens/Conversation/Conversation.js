import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { appColors } from '../../utils/color';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { hitAnnouncements } from '../../redux/AnnouncementsSlice';

const Conversation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const responseAnnouncements = useSelector((state) => state.announcementsReducer.data)

  useEffect(() => {
    dispatch(hitAnnouncements())
  }, [])

  useEffect(() => {
    if (responseAnnouncements != null && responseAnnouncements.status == 1) {
      setData(responseAnnouncements.data)
    }
  }, [responseAnnouncements])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {' '}
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
          <Text style={styles.headerText}>Annoucements</Text>
        </View>
        <ScrollView style={{ padding: 16 }}>
          {data != null && data.map((item) => 
            <View>
              <Text style={styles.schoolText}>{item.title}</Text>
              <Text style={styles.conversationDate}>
                {item.description}
              </Text>
              {/* <View>
                <View>
                  <Text style={styles.adminustratorStyle}>Administrator</Text>
                  <Text>(1)</Text>
                </View>
                <Text style={styles.conversationDate}>1-1-2025</Text>
              </View> */}
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  schoolText: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '600',
  },
  conversationDate: {
    borderBottomWidth: 1,
    borderColor: appColors.lightGray,
    color: appColors.grey,
    paddingBottom: 12,
    fontSize: 12,
  },
  adminustratorStyle: {
    color: appColors.primaryColor,
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  }
});
