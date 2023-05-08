/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Logo, OnBoardFace1} from '../../assets';
import {Gap} from '../../components/atoms';

const OnBoard1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Logo} />
      <Gap height={26} />
      <OnBoardFace1 style={styles.OnBoardFace1} />
      <Gap height={11} />
      <Text style={styles.text}>Find Your Favorite Designer!</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('OnBoard2')}>
        <View style={styles.containerText}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoard1;

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
    width: 89,
    height: 38,
    backgroundColor: '#F7F2F2',
    borderRadius: 10,
    paddingVertical: 7,
    marginTop: 99,
    marginLeft: 227,
  },
  buttonText: {
    fontSize: 19,
    fontFamily: 'Montserrat-ExtraBold',
    textAlign: 'center',
    color: '#65BC9A',
  },
});
