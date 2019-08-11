import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';

import User from '../User';
import styles from '../../constants/styles';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Chats',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center',
      fontWeight: 'bold',
    }
  }

  state = {
    users: []
  }

  componentDidMount() {
    let dbRef = firebase.database().ref('users');
    dbRef.on('child_added', (val) => {
      let person = val.val();
      person.phone = val.key;
      this.setState((prevState) => {
        return {
          users: [...prevState.users, person]
        }
      })
    });
  }

  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Chat', item)}
        style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={(item) => item.phone}
        />
      </SafeAreaView>
    );
  }
}