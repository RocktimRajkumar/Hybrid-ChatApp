import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';

import User from '../User';

import styles from '../../constants/styles';

class LoginScreen extends React.Component {
    static navigationOptions = {
        header : null
    }

  state = {
    phone: '',
    uname: '',
  }

  submitForm = async () => {
    if (this.state.phone.length < 10) {
      Alert.alert('Error', 'Invalid Phone number!')
    } else if (this.state.uname.length < 3) {
      Alert.alert('Error', 'Invalid username!')
    } else {
      // save user data
      await AsyncStorage.setItem('userPhone',this.state.phone);
      User.phone = this.state.phone;
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Phone number" keyboardType="number-pad" onChangeText={(text) => {
          this.setState({
            phone: text
          })
        }} value={this.state.phone} />
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => {
          this.setState({
            uname: text
          })
        }} value={this.state.uname} />
        <TouchableOpacity
          onPress={this.submitForm}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
