//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthToDp} from '../Responsive/responsive';

// create a component
const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style ={styles.marginToDp}>
          <Text style={styles.header}>How it all started</Text>
          <Text style={styles.description}>
            Policybazaar was founded in 2008 with one objective: bringing
            transparency in insurance. The founders wanted to reimagine
            insurance, so they started by simplifying all the information around
            plans, ending the rampant mis-selling, and preventing policy lapses.
          </Text>
        </View>
        <View style ={styles.marginToDp}>
          <Text style={styles.header}>13 years of success</Text>
          <Text style={styles.description}>
            Today, we are India’s best & largest online insurance marketplace.
            Over 9+ million (90 lakh+) individuals have come to us & bought the
            best insurance plans from the top insurers in the country. We have
            sold over 19 million policies since inception, and this number is
            only growing.
          </Text>
        </View>
        <View style ={styles.marginToDp}>
          <Text style={styles.header}>A look forward</Text>
          <Text style={styles.description}>
            While we are happy with how we are changing insurance for the
            country, we know there is still a lot of work to be done. Our vision
            to bring pioneering technologies & innovations to the field
            continues to grow. We aspire to build a health & financial safety
            net for more households in India in the coming years.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  textContainer: {
    width: widthToDp(90),
    marginVertical: widthToDp(5),
  },
  header: {color: '#000', fontSize: widthToDp(5), fontWeight: '500'},
  description: {color: '#000'},
  marginToDp:{
    marginBottom:widthToDp(5)
  }
});

export default About;
