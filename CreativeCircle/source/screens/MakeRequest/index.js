/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Back, ProfileFace, UploadPicturePost} from '../../assets';
import {Gap, TextInputTemp} from '../../components/atoms';
import BottomTemp from '../../components/molecules/Bottom';

const MakeRequest = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <View>
            <Back />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Make A Request!</Text>
        </View>
        <Image source={ProfileFace} style={styles.profile} />
      </View>
      <View style={styles.content}>
        <Gap height={15} />
        <TextInputTemp
          title="What Kind Of Design Do You Need?"
          placeholder="Enter Your Message"
          color="#F7F2F2"
          backgroundColor="#F7F2F2"
        />
        <Text style={styles.uploadText}>Upload Pictures (Optional)</Text>
        <UploadPicturePost style={styles.uploadPict} />
        <Text style={styles.textPrePost}>Your Post Should Be Shown Below</Text>
      </View>
      <View style={styles.content1}>
        <View style={styles.contentProfile}>
          <Image source={ProfileFace} style={styles.contentProfilePict} />
          <View style={styles.textProfileContent}>
            <Text style={styles.name}>Juan Salainti</Text>
            <Text style={styles.date}>12.24 pm</Text>
          </View>
        </View>
        <View style={styles.contentText}>
          <Text style={styles.messageContent1}>Your message goes here...</Text>
        </View>
        <TouchableOpacity style={styles.applyButtonClick}>
          <View style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.SendRequest}>
        <View style={styles.SendRequestWrapper}>
          <Text style={styles.SendRequestText}>Send Request!</Text>
        </View>
      </TouchableOpacity>
      <BottomTemp onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

export default MakeRequest;

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
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 11,
    color: 'black',
  },
  content: {
    backgroundColor: '#65BC9A',
  },
  uploadText: {
    marginLeft: 26,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    marginTop: 25,
  },
  uploadPict: {
    marginLeft: 37,
    marginTop: 6,
  },
  textPrePost: {
    textAlign: 'center',
    marginTop: 24,
    fontStyle: 'italic',
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
  content1: {
    marginTop: 10,
    height: 200,
    backgroundColor: '#F7F2F2',
  },
  contentProfile: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 20,
  },
  contentProfilePict: {
    width: 37,
    height: 38,
    borderRadius: 110,
  },
  textProfileContent: {
    marginLeft: 12,
  },
  name: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  date: {
    fontSize: 9,
    fontFamily: 'Montserrat-Light',
  },
  contentText: {
    width: 293,
    height: 40,
    marginLeft: 38,
    marginTop: 21,
  },
  messageContent1: {
    width: 293,
    height: 40,
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  applyButton: {
    backgroundColor: '#D9D9D9',
    width: 80,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 290,
    marginTop: 31,
  },
  applyButtonClick: {
    width: 80,
    height: 32,
  },
  applyText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#1F2D71',
  },
  SendRequest: {
    width: 308,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#65BC9A',
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  SendRequestText: {
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
  },
});
