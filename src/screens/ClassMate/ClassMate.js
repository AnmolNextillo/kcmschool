import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { appColors } from '../../utils/color';
import { useNavigation } from '@react-navigation/core';
import { DataTable } from "react-native-paper";
import { Image } from 'react-native-svg';
import { getImage } from '../../utils/getImages';
import { useDispatch, useSelector } from 'react-redux';
import { hitMyClassMate } from '../../redux/MyClassMateSlice';
import ProfileIcon from '../../assets/svg/ProfileIcon';
import HomeProfileIcon from '../../assets/svg/HomeProfileIcon';

const ClassMate = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [myClassmates, setMyClassmates] = useState(null)

  const responseClassMates = useSelector((state) => state.myClassMateReducer.data)

  useEffect(() => {
    dispatch(hitMyClassMate())
  }, [])

  useEffect(() => {
    if (responseClassMates != null && responseClassMates.status === 1) {
      setMyClassmates(responseClassMates.data)
    }
  }, [responseClassMates])

  const studentData = [
    { id: "1", name: "Jobanpreet Singh", photo: null },
    { id: "2", name: "Inaaya Arora", photo: null },
    { id: "3", name: "Aarav Thakur", photo: null },
    { id: "4", name: "Viraaj", photo: null },
    { id: "5", name: "Gurniwaz Singh Samagh", photo: null },
  ];

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
          <Text style={styles.headerText}>Classmates</Text>
        </View>
        <ScrollView style={{ padding: 16 }}>

          <FlatList
            data={myClassmates}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <View style={{ backgroundColor: appColors.white, flexDirection: 'row', padding: 16, borderRadius: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 16, marginRight: 16 }}>{index + 1 + "."}</Text>
                <View style={styles.profileImage}>
                  <HomeProfileIcon height={24} width={24} />
                </View>
                <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: "600", color: appColors.primaryColor }}>{item.name}</Text>

              </View>
            )}
          />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ClassMate;

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  columnSmall: {
    flex: 1,
  },
  columnLarge: {
    flex: 3,
  },
  columnMedium: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: appColors.lightGray
  },
  profileImage: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: appColors.black,
    borderRadius: 6,
  },
});
