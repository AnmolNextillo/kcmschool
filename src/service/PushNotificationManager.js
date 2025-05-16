import React, { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PushNotificationManager = () => {
  useEffect(() => {
    const initialize = async () => {
      await requestUserPermission();
      await getFcmToken();
      const unsubscribeForeground = handleForegroundMessages();
      const unsubscribeBackground = handleBackgroundMessages();

      return () => {
        unsubscribeForeground();
        unsubscribeBackground();
      };
    };

    initialize();
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Notification permission enabled:', authStatus);
    } else {
      console.log('Notification permission not granted');
    }
  };

  const getFcmToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem("fcmToken",fcmToken)
        console.log('FCM Token:', fcmToken);
        // TODO: Send token to your server if needed
      } else {
        console.warn('Failed to get FCM token');
      }
    } catch (error) {
      console.error('FCM token error:', error);
    }
  };

  const handleForegroundMessages = () => {
    return messaging().onMessage(async remoteMessage => {
      console.log('Foreground message:', remoteMessage);
    //   Alert.alert(
    //     remoteMessage.notification?.title || 'Notification',
    //     remoteMessage.notification?.body || ''
    //   );
    });
  };

  const handleBackgroundMessages = () => {
    return messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Background message:', remoteMessage);
      // Handle the message here or in a separate screen
    });
  };

  return null; // This component does not render UI
};

export default PushNotificationManager;
