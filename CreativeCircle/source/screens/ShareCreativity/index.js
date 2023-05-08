/* eslint-disable prettier/prettier */
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import {Back, Michael, UploadPicturePost, Karya} from '../../assets';
  import {Gap, TextInputTemp} from '../../components/atoms';
  import BottomTemp from '../../components/molecules/Bottom';
  
  const ShareCreativity = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <View>
              <Back />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Share Your Creativity</Text>
          </View>
          <Image source={Michael} style={styles.profile} />
        </View>
        <ScrollView style={styles.Scroll}>
          <View style={styles.content}>
            <Gap height={15} />
            <TextInputTemp
              title="Design Caption"
              placeholder="Enter Your Message"
            />
            <Text style={styles.uploadText}>Upload Pictures</Text>
            <UploadPicturePost style={styles.uploadPict} />
            <Text style={styles.textPrePost}>
              Your Post Should Be Shown Below
            </Text>
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
                Your Caption Goes Here...
              </Text>
            </View>
            <Image source={Karya} style={styles.karya} />
          </View>
  
          <TouchableOpacity style={styles.SendRequest}>
            <View style={styles.SendRequestWrapper}>
              <Text style={styles.SendRequestText}>Post!</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <BottomTemp />
      </View>
    );
  };
  
  export default ShareCreativity;
  
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
    Scroll: {
      height: 480,
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
      marginLeft: 38,
    },
  });