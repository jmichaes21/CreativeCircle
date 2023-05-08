/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  OpenApp,
  OnBoard1,
  OnBoard2,
  OnBoard3,
  SignIn,
  CustomerHome,
  DesignerHome,
  ApplyRequest,
  ContactDesigner,
  MakeRequest,
  ShareCreativity,
  Setting,
} from '../screens';

import BottomTemp from '../components/molecules/Bottom';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OpenApp"
        component={OpenApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoard1"
        component={OnBoard1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoard2"
        component={OnBoard2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoard3"
        component={OnBoard3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CustomerHome"
        component={CustomerHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DesignerHome"
        component={DesignerHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ApplyRequest"
        component={ApplyRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactDesigner"
        component={ContactDesigner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MakeRequest"
        component={MakeRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShareCreativity"
        component={ShareCreativity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTemp"
        component={BottomTemp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
