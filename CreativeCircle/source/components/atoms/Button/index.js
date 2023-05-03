/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, color = '#65BC9A', textColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    height: 37,
    marginHorizontal: 26,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }),
  text: textColor => ({
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: textColor,
    paddingVertical: 10,
  }),
});
