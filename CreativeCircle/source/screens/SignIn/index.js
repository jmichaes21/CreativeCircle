/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import {Button, Gap, TextInputTemp} from '../../components/atoms';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.headerLogo} />
        <Text style={styles.headerText1}>Sign In</Text>
        <Text style={styles.headerText2}>Customer/Designer</Text>
      </View>
      <View style={styles.form}>
        <Gap height={40} />
        <TextInputTemp placeholder="Enter Your Email" title="Email Address" />
        <Gap height={23} />
        <TextInputTemp placeholder="Enter Your Password" title="Password" />
        <Gap height={23} />
        <TextInputTemp
          placeholder="Enter 6 Digits Verification Code"
          title="Verification Code"
        />
        <Gap height={26} />
        <Button
          title="Send Verification Code"
          color="#D9D9D9"
          textColor="#000000"
        />
        <Gap height={15} />
        <Button
          title="Sign In As Customer"
          color="#65BC9A"
          textColor="white"
          onPress={() => navigation.navigate('CustomerHome')}
        />
        <Gap height={15} />
        <Button
          title="Sign In As Designer"
          color="#65BC9A"
          textColor="white"
          onPress={() => navigation.navigate('DesignerHome')}
        />
        <Gap height={50} />
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Need Help?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 161,
    backgroundColor: '#F7F2F2',
    alignItems: 'center',
  },
  headerLogo: {
    width: 63,
    height: 64,
    marginTop: 27,
  },
  headerText1: {
    fontSize: 14,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#65BC9A',
    marginTop: 5,
  },
  headerText2: {
    fontSize: 14,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#1F2D71',
    marginTop: 5,
  },
  form: {
    backgroundColor: '#1F2D71',
  },
  helpButton: {
    alignItems: 'center',
    marginBottom: 5,
  },
  helpText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#65BC9A',
  },
});
