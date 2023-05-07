/* eslint-disable prettier/prettier */
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Home, Menu, Settings} from '../../../assets';

const BottomTemp = () => {
  return (
    <View style={styles.bottom}>
      <TouchableOpacity>
        <View style={styles.Home}>
          <Home />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.Menu}>
          <Menu />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.Settings}>
          <Settings />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTemp;

const styles = StyleSheet.create({
  container: {},
  bottom: {
    flexDirection: 'row',
    backgroundColor: '#F7F2F2',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Home: {
    marginRight: 83,
  },
  Menu: {
    marginRight: 83,
  },
});
