//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as Config from '../Common/config';
import {widthToDp} from '../Responsive/responsive';

// create a component
const CommonHeader = ({showImage, text, textStyle,backGroundStyle}) => {
  return (
    <View style={{...styles.container,...{backgroundColor:backGroundStyle}}}>
      <TouchableOpacity activeOpacity={0.6}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {text ? (
            <View>
              <Text style={textStyle}>{text}</Text>
            </View>
          ) : null}
          {showImage ? (
            <View>
              <Image
                source={require('../Assets/images/Policybazaar.webp')}
                style={{
                  width: widthToDp(100),
                  height: widthToDp(15),
                  resizeMode: 'contain',
                }}
              />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    width: widthToDp(100),
    // padding: widthToDp(1),
    height: widthToDp(18),
  },
});

//make this component available to the app
export default CommonHeader;
