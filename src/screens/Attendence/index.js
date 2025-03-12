import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { appColors } from '../../utils/color'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import app from '../../component/firebase';

const Attendence = ({navigation}) => {

    const [selected, setSelected] = useState('');
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
                    markedDates={{
                        '2025-03-01': { selected: true, marked: true, selectedColor: 'green' },
                        '2025-03-02': { marked: true },
                        '2025-03-03': { selected: true, marked: true, selectedColor: 'blue' }
                    }}
                />
            </View>

            <View style={{ padding: 16, margin: 16, backgroundColor: appColors.white, borderRadius: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.green, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Present</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.red, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Absent</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.green, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Present</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.red, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Absent</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.green, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Present</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.red, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Absent</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.green, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Present</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.red, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Absent</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.green, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Present</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: appColors.red, height: 20, width: 20, borderRadius: 10 }} />
                        <Text style={{ marginHorizontal: 8 }}>Absent</Text>
                    </View>
                </View>
            </View>

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