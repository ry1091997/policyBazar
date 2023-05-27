//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {widthToDp} from '../Responsive/responsive';
import * as config from '../Common/config';
import {useSelector} from 'react-redux';

// create a component
const DetailsPage = ({userId}) => {
  const newsData = useSelector(state => {
    let userData = state.data.filter(item => userId === item.id);
    console.log('filter data==>', userData);
    return userData[0];
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: newsData.avatar}} style={styles.image} />
      </View>
      <View style={styles.textMainContainer}>
        <View style={styles.mainTextContainer}>
          <View style={styles.nameArea}>
            <View
            // style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            >
              {/* written by: contact detail: */}
              {/* <Text style={{fontSize: widthToDp(4)}}>User name: </Text> */}
              <Text style={styles.textStyle}>
                {newsData.first_name} <Text>{newsData.last_name}</Text>
              </Text>
            </View>
            <View
            // style={{flexDirection: 'row', justifyContent: 'space-between'}}
            >
              {/* <Text style={{fontSize: widthToDp(4)}}>User email: </Text> */}
              <Text style={styles.textStyle}>{newsData.email}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.story}>{config?.detailsPageParaGraph}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  imageContainer: {backgroundColor: '#000'},
  image: {
    width: widthToDp(100),
    height: widthToDp(50),
    resizeMode: 'contain',
  },
  textMainContainer: {
    alignItems: 'center',
  },
  nameArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthToDp(95),
    marginVertical: widthToDp(3),
  },
  mainTextContainer: {
    width: widthToDp(95),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {fontSize: widthToDp(4.5), fontWeight: 'bold', color: '#000'},
  story: {
    fontSize: widthToDp(4.3),
    lineHeight: 20,
    fontWeight: '400',
    color: '#000',
  },
});

//make this component available to the app
export default DetailsPage;
