import React from 'react';
// import SignIn from './src/screens/SignIn/index.js';
import {View, Text} from 'react-native';
import Button from './source/components/atoms/Button';
import TextInput from './source/components/atoms/TextInput';
import Header from './source/components/molecules/Header';
import OpenApp from './source/screens/OpenApp';

const App = () => {
  return (
    <View>
      <OpenApp />
    </View>
  );
};

//Function Component

//Export
export default App;
