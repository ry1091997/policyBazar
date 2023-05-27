//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

// create a component
const CustomModal = ({modalVisible, onRequestClose, children}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false} // Set the modal to be transparent
        visible={modalVisible}
        onRequestClose={onRequestClose}>
        {children}
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default CustomModal;
