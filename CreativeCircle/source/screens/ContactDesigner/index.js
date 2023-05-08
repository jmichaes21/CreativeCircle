/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import BottomTemp from '../../components/molecules/Bottom';
import {Back, Michael, ProfileFace, Send, Upload} from '../../assets';
import {Gap} from '../../components/atoms';

const ContactDesigner = ({navigation}) => {
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
        <Image source={Michael} style={styles.profile} />
        <View>
          <Text style={styles.name}>Michael S</Text>
          <Text style={styles.job}>Book Cover Designer</Text>
        </View>
      </View>
      <Gap height={370} />
      <View style={styles.chatWrapper}>
        <View style={styles.chat}>
          <Text style={styles.message}>Hello Lets Work Together</Text>
          <Text style={styles.messageTime}>12.24</Text>
        </View>
        <Image source={ProfileFace} style={styles.Michael} />
      </View>
      <View style={styles.chatFunction}>
        <TouchableOpacity>
          <Upload style={styles.upload} />
        </TouchableOpacity>
        <TextInput style={styles.chatInput} placeholder="Enter Your Message" />
        <TouchableOpacity>
          <Send style={styles.send} />
        </TouchableOpacity>
      </View>
      <BottomTemp onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

export default ContactDesigner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2D71',
  },
  header: {
    flexDirection: 'row',
    height: 132,
    backgroundColor: '#F7F2F2',
    alignItems: 'center',
  },
  profile: {
    width: 36,
    height: 38,
    borderRadius: 110,
    marginLeft: 18,
  },
  back: {
    marginLeft: 40,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 11,
  },
  job: {
    marginLeft: 11,
    fontSize: 10,
    fontFamily: 'Montserrat-Light',
  },
  chatWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  chat: {
    flexDirection: 'row',
    width: 197,
    height: 32,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 160,
  },
  message: {
    fontSize: 11,
    fontFamily: 'Montserrat-Medium',
    color: '#000000',
  },
  messageTime: {
    fontSize: 9,
    fontFamily: 'Montserrat-Light',
    marginLeft: 6,
    marginTop: 10,
  },
  Michael: {
    width: 38,
    height: 40,
    borderRadius: 110,
    marginLeft: 10,
    marginBottom: 10,
  },
  chatFunction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  upload: {
    marginLeft: 17,
    marginRight: 20,
  },
  chatInput: {
    width: 295,
    height: 40,
    borderColor: '#020202',
    borderRadius: 10,
    backgroundColor: '#F7F2F2',
    paddingLeft: 12,
    marginRight: 10,
  },
});
