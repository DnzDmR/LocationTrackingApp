import React, {Component } from 'react';
import {StatusBar,View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import style from '../styles/loginStyle';

export default class LoginForm extends Component {

    render() {
        return (
        <View style={style.baseContainer}>
            <StatusBar backgroundColor='#3a495c' barStyle='light-content' />
            <View style={style.logoContainer}>
                <Image source={require('../images/logo.png')} style={style.logo} />
            </View>
            <View style={style.formContainer}>
                <TextInput placeholder="Username" style={style.inputText}/>
                <TextInput placeholder="Password" style={style.inputText} />
                <TouchableOpacity style={style.loginButton} > 
                    <Text style={style.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.loginButton} > 
                    <Text style={style.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    } 
}