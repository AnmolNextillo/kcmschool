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
import React, {useEffect, useState} from 'react';
import {getImage} from '../../utils/getImages';
import {appColors} from '../../utils/color';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { clearLoginData, hitLogin } from '../../redux/LoginSlice';
import { handleShowMessage } from '../../utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const loginResponse = useSelector(state => state.loginReducer.data);

  const [email, setEmail] = useState("manishseera12@gmail.com");
  const [password, setPassword] = useState('123456');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onLoginClick = async () => {

    if (email.length == 0) {
      handleShowMessage("Please enter valid number", "danger");
    }  else {
      setIsLoading(true);
      const payload = {
        email: email,
        password: password,
      };

      console.log('Payload ===> ', payload);
      dispatch(hitLogin(payload));
    }
  };

  useEffect(() => {
    console.log('loginResponse ===> ', loginResponse);
    if (loginResponse != null && loginResponse.status == 1) {
      setIsLoading(false);
      saveToken(loginResponse.token);
      navigation.navigate("BottomBar")
      dispatch(clearLoginData());
    } else if (loginResponse != null) {
      setIsLoading(false);
      handleShowMessage(loginResponse.message, 'danger');
    }
  }, [loginResponse]);

  const saveToken = async (token) => {
    console.log('token ===> ', token);
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('mobileNumber', mobileNumber);
  };

  return (
    <SafeAreaView style={[styles.containerStyle, {padding: 16}]}>
      <ScrollView style={styles.containerStyle}>
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
          <Text style={styles.headerStyle}> Login </Text>

          <Text style={styles.titleStyle}>Email</Text>
          <View
            style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{
                color: appColors.black,
              }}
            />
          </View>

          <Text style={styles.titleStyle}>Password</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Password"
              style={{
                flex: 1,
                color: appColors.black
              }}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#A9A9A9" // appColors.grey alternative
              secureTextEntry={!isPasswordVisible} // hides password when false
            />
            
          </View>

          <TouchableOpacity
            style={styles.loginButtonViewStyle}
            onPress={() => onLoginClick()}>
               {!isLoading ? (
            <Text style={styles.loginButtonStyle} >Login</Text>
          ) : (
            <ActivityIndicator
              size="small"
              color={appColors.white}
              style={{ margin: 15 }}
            />
          )}
          </TouchableOpacity>

          <Text
            style={{
              marginTop: 16,
              alignSelf: 'center',
              fontSize: 16,
            }}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
  },
  formAreaStyle: {
    flex: 1,
    marginTop: 24,
  },
  iconStyle: {
    padding: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.grey,
    borderRadius: 8,
    marginVertical: 10,
    height:45,
    paddingHorizontal:8
  },
  textInputStyle: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: appColors.grey,
    width: '100%',
    paddingHorizontal: 8,
  },
  textOptionStyle: {
    color: appColors.black,
    marginTop: 16,
  },
  loginButtonViewStyle: {
    marginTop: 24,
    backgroundColor: appColors.primaryColor,
    borderRadius: 4,
    height:45,
    alignItems:'center',
    justifyContent:'center'
  },
  loginButtonStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.white,
    textAlign: 'center',
   
  },
  titleStyle: {
    marginTop: 16,
    fontWeight: '600',
    color: appColors.black,
  },
  buttonStyle: {
    borderColor: appColors.primaryColor,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
    color: appColors.primaryColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

{/* <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.iconStyle}>
              {isPasswordVisible ? (
                <Image
                  source={getImage('eye')}
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    height: 24,
                    width: 24,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={getImage('hidden')}
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    height: 24,
                    width: 24,
                  }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity> */}