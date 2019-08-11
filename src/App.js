import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import LoginScreen from './components/LoginScreen';
import AuthLoading from './components/AuthLoading';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: Home });
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));