import React from 'react';
// import SignIn from './src/screens/SignIn/index.js';
import {View, Text} from 'react-native';
import Button from './source/components/atoms/Button';
import TextInput from './source/components/atoms/TextInput';
import Header from './source/components/molecules/Header';

const App = () => {
  return (
    <View>
      <Header>
        <Text>Halo</Text>
      </Header>
      <Button title="Testing Button" color="#65BC9A" />
      <TextInput title="Email Address" placeholder="Insert Your Email" />
    </View>
  );
};

//Function Component

//Export
export default App;
