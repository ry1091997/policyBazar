import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Provider} from 'react-redux';
import store from './SRC/store/store';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './SRC/Screen/Welcome';
import * as Config from './SRC/Common/config';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.flexStyle}>
          <SafeAreaView style={styles.safeAreaStyle}>
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={Config?.status_bar_background_color}
            />

            <View style={styles.flexStyle}>
              <Welcome />
            </View>
          </SafeAreaView>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  flexStyle: {flex: 1},
  safeAreaStyle: {flex: 1, justifyContent: 'center', backgroundColor: '#fff'},
});

export default App;
