
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {widthToDp} from '../Responsive/responsive';
import * as Config from '../Common/config';

// create a component
const ListComponent = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.opacityStyle}>
        <View>
          <Image source={{uri: item.avatar}} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textSubContainer}>
            <Text style={styles.nameContainer}>
              {item.first_name} {item.last_name}
            </Text>
            <View>
              <Text>{item.email}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    elevation: 100,
    shadowColor: '#fff',
    backgroundColor: '#1e566d',
    borderRadius: widthToDp(2),
  },
  opacityStyle: {
    flexDirection: 'row',
    width: widthToDp(90),
  },
  icon: {
    width: widthToDp(30),
    height: widthToDp(30),
    borderRadius: widthToDp(2),
  },
  textContainer: {
    alignItems: 'flex-start',
    width: widthToDp(60),
  },
  textSubContainer: {paddingHorizontal: widthToDp(1)},
  nameContainer: {fontSize: widthToDp(7), color: '#fff'},
});

export default ListComponent;
