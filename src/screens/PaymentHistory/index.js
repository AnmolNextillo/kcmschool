import React from "react";
import { View, FlatList, Text, StyleSheet, SafeAreaView } from "react-native";
import { Card, Badge } from "react-native-paper";
import { appColors } from "../../utils/color";

const PaymentHistory= ({navigation}) => {
  const paymentData = [
    { id: "1", amount: "₹200", date: "2025-02-10", method: "Credit Card", status: "Paid" },
    { id: "2", amount: "₹150", date: "2025-02-05", method: "PayPal", status: "Pending" },
    { id: "3", amount: "₹300", date: "2025-01-20", method: "Bank Transfer", status: "Failed" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "green";
      case "Pending":
        return "orange";
      case "Failed":
        return "red";
      default:
        return "gray";
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
        <View style={{flex:1}}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.method}>Method: {item.method}</Text>
        </View>
        <Text style={[styles.badge, { backgroundColor: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
     
    </View>
  );

  return (
     <SafeAreaView style={{flex: 1}}>
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
            <Text style={styles.headerText}>Payment History</Text>
          </View>
    <View style={styles.container}>
      <FlatList
        data={paymentData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor:appColors.white,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  method: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: "white",
  },
   headerText: {
      color: appColors.black,
      fontWeight: '500',
      marginRight: 16,
      textAlign: 'center',
      flex: 1,
      fontSize: 16,
    },
});

export default PaymentHistory;
