import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import User from '../User';
import styles from '../../constants/styles';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';


export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center',
            fontWeight: 'bold',
        },
    }

    state = {
        name: User.name
    }

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    changeName = async () => {
        if (this.state.name < 3) {
            Alert.alert('Error', 'Please enter a valid name');
        } else if (User.name !== this.state.name) {
            firebase.database().ref('users').child(User.phone).set({ name: this.state.name });
            Alert.alert('Success', 'Name changed successful');
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 20 }}>
                    {User.phone}
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={(text) => {
                        this.setState({
                            name: text
                        })
                    }}
                />
                <TouchableOpacity onPress={this.changeName}>
                    <Text style={styles.buttonText}>Change Name</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._logOut}>
                    <Text style={{ color: 'green',marginLeft: 20,fontSize: 16,}}>LogOut</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}