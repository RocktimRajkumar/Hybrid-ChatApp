import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import User from '../User';
import styles from '../../constants/styles';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Chats'
  }

  _logOut =  async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {User.phone}
        </Text>
        <TouchableOpacity onPress={this._logOut}>
            <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}