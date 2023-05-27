// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../Router/bottomTab';
import CommonHeader from '../Components/header';

const Tab = createBottomTabNavigator();

export default function Welcome() {
  return (
    <View style={{flex: 1}}>
      <CommonHeader showImage={true} backGroundStyle="#1e566d" />
      <BottomTab />
    </View>
  );
}
