/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInputTemp = ({title, placeholder}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInputTemp;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 4,
    color: 'white',
    marginLeft: 26,
  },
  input: {
    borderColor: '#020202',
    borderRadius: 10,
    paddingLeft: 16,
    paddingVertical: 10,
    marginHorizontal: 26,
    backgroundColor: '#F7F2F2',
  },
});