import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { appColors } from "../utils/colors";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const BottomSheetModal = ({ modalVisible, setModalVisible }) => {


  return (
    <View style={styles.container}>
      {/* <Button title="Open Bottom Sheet" onPress={() => setModalVisible(true)} /> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.bottomSheet}>
            <Text style={styles.title}>Book the tests</Text>
            <Text style={styles.textStyle}>Please choose one service bases on your convenience</Text>
            <TouchableOpacity style={{backgroundColor:appColors.offWhite,borderRadius:16,padding:16,marginTop:16}}>
              <Text style={{color:appColors.primaryColor,fontSize:14}}>Home Collecttion</Text>
              <Text style={{color:appColors.black,fontSize:12}}>Get all your tests done at Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:appColors.offWhite,borderRadius:16,padding:16,marginTop:16}}>
              <Text style={{color:appColors.primaryColor,fontSize:14}}>Hospital Visit</Text>
              <Text style={{color:appColors.black,fontSize:12}}>Get all test from Hospital</Text>
            </TouchableOpacity>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  bottomSheet: { backgroundColor: "white", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10,textAlign:'center' },
  textStyle:{fontSize:12,color:appColors.black}
});

export default BottomSheetModal;