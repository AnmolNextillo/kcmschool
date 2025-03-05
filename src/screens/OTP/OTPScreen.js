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
  import OTPTextInput from 'react-native-otp-textinput';  
import { getImage } from '../../utils/getImages';
import { appColors } from '../../utils/color';
  
  const OtpScreen = ({navigation}) => {

    return (
      <SafeAreaView style={styles.containerStyle}>
      <ScrollView style={styles.containerStyle}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Text style={{color:appColors.primaryColor,margin:16}}>Back</Text>
              </TouchableOpacity>
        <Image
          source={getImage('logo')}
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            height: 120,
            width: 150,
            marginTop:32
          }}
          resizeMode="contain"
        />
  
        <View style={styles.formAreaStyle}>
          <Text style={styles.headerStyle}>Enter OTP </Text>
          <OTPTextInput
            inputCount={6}
            keyboardType="numeric"
            textInputStyle={{
              borderColor: appColors.black,
              borderWidth: 2,
              borderRadius: 5, 
              padding: 10, 
            }}
            containerStyle={{
              borderColor: appColors.black,
              borderBlockColor: appColors.black,
              marginTop: 36,
            }}
            style={{
              borderColor: appColors.primaryColor,
              height: 50,
              width: 50,
              borderWidth: 1,
              borderRadius: 4,
              textAlign: 'center',
              
            }}
          />
  
          <Text
            style={{
              color: appColors.primaryColor,
              marginTop: 16,
              alignSelf: 'center',
              fontSize: 16,
            }}
            >
            Resend OTP
          </Text>
  
          <View style={styles.loginButtonViewStyle}>
          <Text style={styles.loginButtonStyle}>
            Verify
          </Text>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default OtpScreen;
  
  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: appColors.white,
      
    },
    headerStyle: {
      marginTop: 48,
      color: appColors.primaryColor,
      fontSize: 20,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
    },
    formAreaStyle: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      marginHorizontal:16,
      justifyContent: 'center',
    },
    textInputStyle: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: appColors.grey,
      paddingHorizontal: 8,
      color: appColors.black,
    },
    textOptionStyle: {
      color: appColors.black,
      marginTop: 16,
    },
    loginButtonViewStyle: {
      marginVertical: 32,
      backgroundColor: appColors.primaryColor,
      borderRadius: 4,
    },
    loginButtonStyle: {
      fontSize: 16,
      fontWeight: '700',
      color: appColors.white,
      padding: 16,
      textAlign: 'center',
    },
  });
  