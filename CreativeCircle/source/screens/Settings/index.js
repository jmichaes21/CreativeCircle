/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Back, Settings} from '../../assets';

const Setting = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <View>
            <Back />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <Settings style={styles.settingLogo} />
      </View>

      <Text style={styles.settingsTitle}>My Account</Text>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>Account & Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>Profile</Text>
      </TouchableOpacity>

      <Text style={styles.settingsTitle}>Settings</Text>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>Language</Text>
      </TouchableOpacity>

      <Text style={styles.settingsTitle}>Help</Text>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>Customer Service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>Community</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingMenu}>
        <Text style={styles.textMenu}>FAQ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 132,
    backgroundColor: '#F7F2F2',
    alignItems: 'center',
  },
  profile: {
    width: 46,
    height: 48,
    borderRadius: 110,
    marginLeft: 108,
  },
  back: {
    marginLeft: 40,
  },
  headerText: {
    fontSize: 19,
    fontFamily: 'Montserrat-ExtraBold',
    marginLeft: 11,
    color: 'black',
  },
  settingLogo: {
    width: 23,
    height: 23,
    marginLeft: 14,
  },
  settingsTitle: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    marginTop: 17,
    marginBottom: 6,
    marginLeft: 7,
  },
  settingMenu: {
    height: 40,
    backgroundColor: '#F7F2F2',
    justifyContent: 'center',
  },
  textMenu: {
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
    marginLeft: 12,
  },
});
