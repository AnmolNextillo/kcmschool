import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/color';
import {useNavigation} from '@react-navigation/core';
import {getImage} from '../../utils/getImages';

const bookingImg = imageName => {
  const images = {
    booking: getImage('booking'), 
    image1: getImage('booking'),
    image2: getImage('booking'),
    image3: getImage('booking'),
  };
  return images[imageName];
};

const Gallery = () => {

  const navigation = useNavigation();

  const imageData = ['booking', 'image1', 'image2', 'image3', 'image4'];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {' '}
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
          <Text style={styles.headerText}>Gallery</Text>
        </View>
        <ScrollView style={{padding: 16}}>
          <Text style={{fontSize: 16, marginBottom: 10, fontWeight: '500'}}>
            Celebrations
          </Text>
          <Text style={{fontSize: 14, marginBottom: 10}}>
            abcdefghijklmnopqrstuvwxyz
          </Text>
          <Text style={{fontSize: 14, marginBottom: 10}}>
            abcdefghijklmnopqrstuvwxyz
          </Text>

          <View style={styles.imageChild}>
            <FlatList
              data={imageData}
              renderItem={({item}) => (
                <View style={styles.imageContainer}>
                  <Image
                    source={bookingImg(item)}
                    style={styles.imageBoxStyle}
                    resizeMode="contain"
                  />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2} // Show 2 images per row
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  headerText: {
    color: appColors.black,
    fontWeight: '500',
    marginRight: 16,
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  imageChild: {
    width: '100%',
    gap: 10,
    marginTop: 20,
  },
  imageBoxStyle: {
    width: 150,
    height: 150,    
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 5, 
  },
});
