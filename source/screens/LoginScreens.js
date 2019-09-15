import React, { Component } from 'react';
import {View,Text,StatusBar,TouchableOpacity,Image,TextInput} from 'react-native';
import style from '../styles/loginStyle';
import Button from '../components/Button';
import InputBox from '../components/InputBox';

export default class LoginScreens extends Component {

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
        }
    }

    render() {
        return (
            <View style={style.baseContainer}>
                <StatusBar backgroundColor='#3a495c' barStyle='light-content' />
                <View style={style.logoContainer}>
                    <Image source={require('../images/logo.png')} style={style.logo} />
                </View>
                <View style={style.formContainer}>
                    <InputBox placeholder="Username" onChangeText={(text)=> {this.setState({username:text})}} />
                    <InputBox placeholder="Password" onChangeText={(text)=> {this.setState({password:text})}} />
                    <Button pressed={() => this.props.navigation.navigate('Home')}> LOGIN </Button>
                    <Button pressed={() => this.props.navigation.navigate('Home')}> REGISTER </Button>
                </View>
            </View>
        )
    }
}
