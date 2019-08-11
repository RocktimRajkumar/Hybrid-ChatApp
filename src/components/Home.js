import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    phone: '',
    uname: '',
  }

  componentWillMount(){
    AsyncStorage.getItem('userPhone').then(val=>{
      if(val){
        this.setState({phone:val})
      }
    })
  }

  submitForm = async () => {
    if (this.state.phone.length < 10) {
      Alert.alert('Error', 'Invalid Phone number!')
    } else if (this.state.uname.length < 3) {
      Alert.alert('Error', 'Invalid username!')
    } else {
      // save user data
      await AsyncStorage.setItem('userPhone',this.state.phone);
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    marginBottom: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: 'darkblue',
    marginLeft: 20,
    fontSize: 20,
  }
});

export default Home;
