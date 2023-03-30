import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../Screens/auth/LoginScreen';
import RegistrationScreen from '../Screens/auth/RegistrationScreen';

const AuthStack = createStackNavigator();

export default function AuthRouter() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
}
