import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { appColors } from '../../utils/color';
import { getImage } from '../../utils/getImages';

const ForgotPassword = ({navigation}) => {

  return (
    <SafeAreaView style={[styles.containerStyle, {padding: 16}]}>
      <ScrollView style={styles.containerStyle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: appColors.primaryColor}}>Back</Text>
        </TouchableOpacity>
        <Image
          source={getImage('logo')}
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            height: 120,
            width: 150,
            marginTop: 48,
          }}
          resizeMode="contain"
        />

        <View style={styles.formAreaStyle}>
          <Text style={styles.headerStyle}> Forgot Password </Text>

          <Text style={styles.titleStyle}>Email</Text>
          <View
            style={[
              styles.inputContainer,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <TextInput
              placeholder="Email"
              maxLength={10}
              style={{width: '100%'}}
            />
          </View>

          <View style={styles.loginButtonViewStyle}>
            <Text style={styles.loginButtonStyle} onPress={()=>navigation.navigate('OtpScreen')}>Get OTP</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: appColors.white,
    padding:16
  },
  headerStyle: {
    color: appColors.primaryColor,
    fontSize: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    marginTop: 16,
  },
  formAreaStyle: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.grey,
    borderRadius: 8,
    marginVertical: 10,
    padding:16
  },
  textInputStyle: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: appColors.grey,
    marginTop: 8,
    width: '100%',
    paddingHorizontal: 8,
  },
  textOptionStyle: {
    color: appColors.black,
    marginTop: 16,
  },
  loginButtonViewStyle: {
    marginTop: 32,
    backgroundColor: appColors.primaryColor,
    borderRadius: 4,
  },
  loginButtonStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.white,
    textAlign: 'center',
    padding: 12,
  },
  titleStyle: {
    marginTop: 16,
    fontWeight: '600',
    color: appColors.black,
  },
});
