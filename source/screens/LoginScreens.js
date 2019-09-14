import React, { Component } from 'react';
import {View,Text} from 'react-native';
import LoginForm from '../components/LoginForm';

export default class LoginScreens extends Component {
    render() {
        return (
            <View>
                <LoginForm/>
            </View>
        )
    }
}
