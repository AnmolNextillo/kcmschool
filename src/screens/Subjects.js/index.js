import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import {appColors} from '../../utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { hitGetSubject } from '../../redux/GetSubjectSlice';
  
  const Subjects = ({navigation}) => {

    const responseSubjects = useSelector((state)=>state.getSubjectReducer.data)

    const dispatch = useDispatch()

    const [subjects,setSubjects] = useState(null)

    useEffect(()=>{
      dispatch(hitGetSubject())
    },[])

    useEffect(()=>{
      if(responseSubjects!=null && responseSubjects.status == 1){
        setSubjects(responseSubjects.data)
      }
    },[responseSubjects])
  
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
            <Text style={styles.headerText}>Subjects</Text>
          </View>
          <ScrollView style={{paddingHorizontal: 16,paddingTop:16}} showsVerticalScrollIndicator={false}>
            {subjects!=null && subjects.map((item,index)=>
            <Text style={[styles.testList,{ marginBottom: index==subjects.length-1? 32:16,}]}>{index+1}. {item.name}</Text>
            )} 
            {/* <Text style={styles.testList}>Subject 2</Text>
            <Text style={styles.testList}>Subject 3</Text>
            <Text style={styles.testList}>Subject 4</Text> */}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Subjects;
  
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
      padding:16,
      backgroundColor:appColors.white,
      borderRadius:8
    },
  });
  