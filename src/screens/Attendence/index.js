import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appColors } from '../../utils/color'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import app from '../../component/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { myAttendanceData } from '../../redux/MyAttendanceSlice';

const Attendence = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [selected, setSelected] = useState('');
    const [myAttendance, setMyAttendance] = useState([])

    const responseMyAttendance = useSelector((state) => state.myAttendanceReducer.data)

    useEffect(() => {
        dispatch(myAttendanceData())
    }, [])

    useEffect(() => {
        console.log("MyAttendance data response ===>", responseMyAttendance)
        if (responseMyAttendance != null && responseMyAttendance.status === 1) {
            setMyAttendance(responseMyAttendance.data)
        }
    }, [responseMyAttendance])

    const getColor = (item)=>{

        switch(item.status){
            case 1:return appColors.greenLight;
            case 2: return appColors.orange
            case 3: return appColors.red
            case 4: return appColors.lightBlue
        }

    }

    return (
        <SafeAreaView style={styles.containerStyle}>
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
            <ScrollView>
                <Text style={{ fontWeight: '600', color: app.black, fontSize: 18, padding: 16, textAlign: 'center' }}>
                    Overall Attendance till 11 Mar, 2025 (Days Attented/Total Working Days)
                </Text>

                <Text style={{ fontSize: 22, color: appColors.black, textAlign: 'center', fontWeight: '600' }}>
                    142/191(75.75%)
                </Text>

                <View style={{ marginTop: 16 }}>
                    <Calendar
                        onDayPress={day => {
                            setSelected(day.dateString);
                        }}
                        markedDates={Object.fromEntries(
                            myAttendance.map(item => [item.date, { selected: true, marked: true, selectedColor:getColor(item)}])
                        )}
                    />

                </View>

                <View style={{ padding: 16, margin: 16, backgroundColor: appColors.white, borderRadius: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: appColors.greenLight, height: 20, width: 20, borderRadius: 10 }} />
                            <Text style={{ marginHorizontal: 8 }}>Present</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: appColors.orange, height: 20, width: 20, borderRadius: 10 }} />
                            <Text style={{ marginHorizontal: 8 }}>Leave</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: appColors.red, height: 20, width: 20, borderRadius: 10 }} />
                            <Text style={{ marginHorizontal: 8 }}>Absent</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: appColors.lightBlue, height: 20, width: 20, borderRadius: 10 }} />
                            <Text style={{ marginHorizontal: 8 }}>Holiday</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Attendence

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    headerText: {
        color: appColors.black,
        fontWeight: '500',
        marginRight: 16,
        textAlign: 'center',
        flex: 1,
        fontSize: 16,
    },
})