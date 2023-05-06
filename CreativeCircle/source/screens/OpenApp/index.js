import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Logo } from '../../assets';

const OpenApp = () => {
  return (
    <View style={styles.container1}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.textOne}>CreativeCircle</Text>
      <Text style={styles.textTwo}>"Let Creativity Speak!"</Text>
    </View>
  );
};

export default OpenApp;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#F7F2F2',
    alignItems: 'center',
  },
  logo: {
    width: 115,
    height: 117,
    marginTop: 237,
  },
  textOne: {
    fontSize: 19,
    fontFamily: 'Montserrat-ExtraBold',
    marginTop: 15,
    color: '#65BC9A',
  },
  textTwo: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#1F2D71',
  },
});
