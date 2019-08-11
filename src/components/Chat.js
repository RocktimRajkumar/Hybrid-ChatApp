import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class Chat extends React.Component {
  render() {
    return (
      <View>
        <Text> Hello {this.props.uname}</Text>
      </View>
    );
  }
}

Chat.defaultProps = {
  uname: 'Steve'
};

Chat.propTypes = {
  uname: PropTypes.string
};

export default Chat;
