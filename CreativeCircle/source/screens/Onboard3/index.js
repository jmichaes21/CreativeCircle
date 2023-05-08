/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Logo, OnBoard3Pict, OnBoardFace1} from '../../assets';
import {Gap} from '../../components/atoms';

const OnBoard3 = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Logo} />
      <Gap height={26} />
      <OnBoard3Pict />
      <Gap height={11} />
      <Text style={styles.text}>Personlize Your Profile</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.containerText}>
          <Text style={styles.buttonText}>Get Started !</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoard3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  Logo: {
    width: 75,
    height: 76,
    marginTop: 20,
  },
  text: {
    width: 220,
    fontSize: 19,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#65BC9A',
    textAlign: 'center',
  },
  containerText: {
    width: 220,
    height: 38,
    backgroundColor: '#F7F2F2',
    borderRadius: 10,
    paddingVertical: 7,
    marginTop: 99,
    marginHorizontal: 100,
  },
  buttonText: {
    fontSize: 19,
    fontFamily: 'Montserrat-ExtraBold',
    textAlign: 'center',
    color: '#65BC9A',
  },
});
