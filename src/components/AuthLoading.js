import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';

import User from '../User';

import firebase from 'firebase';

export default class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    componentDidMount() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCd64cQfVGZgBunig_FJtn0pwOcBD6dVGg",
            authDomain: "fir-chat-c7b72.firebaseapp.com",
            databaseURL: "https://fir-chat-c7b72.firebaseio.com",
            projectId: "fir-chat-c7b72",
            storageBucket: "",
            messagingSenderId: "1033817601932",
            appId: "1:1033817601932:web:0de4b87fbca5c84d"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        User.phone = await AsyncStorage.getItem('userPhone');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}