import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', null),
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        fontWeight: 'bold',
      }
    }
  }

  render() {
    return (
      <View>
        <Text>Chat</Text>
      </View>
    );
  }
}

export default Chat;
