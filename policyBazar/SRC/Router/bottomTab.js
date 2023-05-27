import * as React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DataList from '../Screen/list';
import {widthToDp} from '../Responsive/responsive';
import About from '../Screen/About';
import * as Config from '../Common/config';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('../Assets/images/user.png');
          } else if (route.name === 'Settings') {
            iconName = require('../Assets/images/setting.png');
          }

          return (
            <Image
              source={iconName}
              style={{...styles.icon, tintColor: focused ? color : undefined}}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Config.bottom_tab_background_color,
        },
      })}>
      <Tab.Screen name="Home" component={DataList} />
      <Tab.Screen name="Settings" component={About} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: widthToDp(9),
    width: widthToDp(9),
    resizeMode: 'contain',
  },
});
