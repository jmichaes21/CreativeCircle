/* eslint-disable prettier/prettier */
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Huannn, Karya, Logo, Michael} from '../../assets';
import {ProfileFace} from '../../assets';
import BottomTemp from '../../components/molecules/Bottom';

const CustomerHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.headerLogo} />
        <View style={styles.headerText}>
          <Text style={styles.textOne}>CreativeCircle</Text>
          <Text style={styles.textTwo}>Home - Customer</Text>
        </View>
        <Image source={ProfileFace} style={styles.headerPofile} />
      </View>
      <ScrollView style={styles.contentWrap}>
        <View style={styles.content1}>
          <View style={styles.contentProfile}>
            <Image source={ProfileFace} style={styles.contentProfilePict} />
            <View style={styles.textProfileContent}>
              <Text style={styles.name}>Juan Salainti</Text>
              <Text style={styles.date}>12.24 pm</Text>
            </View>
          </View>
          <View style={styles.contentText}>
            <Text style={styles.messageContent1}>
              My Company need a logo design which company name is JS Company.
              Kindly apply this request if you feel interested
            </Text>
          </View>
          <TouchableOpacity style={styles.applyButtonClick}>
            <View style={styles.applyButton}>
              <Text style={styles.applyText}>Apply</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.content2}>
          <View style={styles.contentProfile}>
            <Image source={Michael} style={styles.contentProfilePict} />
            <View style={styles.textProfileContent}>
              <Text style={styles.name}>Michael S</Text>
              <Text style={styles.date}>22.11 pm</Text>
            </View>
            <TouchableOpacity style={styles.contactDesignerButtonClick}>
              <View style={styles.contactDesignerButton}>
                <Text style={styles.contactText}>Contact Designer</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.contentText}>
            <Text style={styles.messageContent1}>
              This is one of my best design cover for Novel. You can contact me
              if you are interested to work with me!
            </Text>
          </View>
          <Image source={Karya} style={styles.karya} />
        </View>

        <View style={styles.content3}>
          <View style={styles.contentProfile}>
            <Image source={Huannn} style={styles.contentProfilePict} />
            <View style={styles.textProfileContent}>
              <Text style={styles.name}>Huannn</Text>
              <Text style={styles.date}>12.24 pm</Text>
            </View>
          </View>
          <View style={styles.contentText}>
            <Text style={styles.messageContent1}>
              My Company need a logo design which company name is JS Company.
              Kindly apply this request if you feel interested
            </Text>
          </View>
          <TouchableOpacity style={styles.applyButtonClick}>
            <View style={styles.applyButton}>
              <Text style={styles.applyText}>Apply</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomTemp />
      <View style={styles.shareCreativity}>
        <TouchableOpacity style={styles.postCreativity}>
          <Text style={styles.textCreativity}>Make A Request!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    height: 125,
    backgroundColor: '#F7F2F2',
    alignItems: 'center',
  },
  headerLogo: {
    width: 64,
    height: 64,
    marginLeft: 19,
  },
  headerText: {
    marginLeft: 14,
  },
  textOne: {
    fontSize: 14,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#65BC9A',
  },
  textTwo: {
    fontSize: 14,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#1F2D71',
  },
  headerPofile: {
    width: 47,
    height: 48,
    borderRadius: 110,
    marginLeft: 100,
  },
  contentWrap: {
    backgroundColor: '#65BC9A',
    height: 480,
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

  content2: {
    marginTop: 5,
    height: 253,
    backgroundColor: '#F7F2F2',
  },
  contactDesignerButton: {
    width: 125,
    height: 27,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 8,
  },
  contactText: {
    fontSize: 10,
    fontFamily: 'Montserrat-SemiBold',
    color: '#1F2D71',
  },
  karya: {
    width: 221,
    height: 113,
    marginLeft: 38,
  },

  content3: {
    marginTop: 5,
    height: 200,
    backgroundColor: '#F7F2F2',
  },
  shareCreativity: {
    width: 155,
    height: 42,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 220,
    marginBottom: 0,
    paddingBottom: 20,
  },
  postCreativity: {
    width: 155,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#1F2D71',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  textCreativity: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#F7F2F2',
  },
});
