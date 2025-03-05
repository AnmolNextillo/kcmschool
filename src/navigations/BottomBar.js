import {StyleSheet, View} from 'react-native';
import React from 'react';
import Tabs from './Tabs';
import {appColors} from '../utils/color';

const BottomBar = () => {
  return (
    <View style={styles.containerStyle}>
      <Tabs />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.primaryColor,
    flex: 1,
  },
});
