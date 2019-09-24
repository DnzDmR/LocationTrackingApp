import React, { Component } from 'react';
import {View,Text,StatusBar,TouchableOpacity,Image,TextInput} from 'react-native';
import style from '../styles/loginStyle';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import UserController from '../controller/UserController';

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
                    <InputBox placeholder="Password" secureTextEntry={true} onChangeText={(text)=> {this.setState({password:text})}} />
                    <Button pressed={this.login.bind(this)}> LOGIN </Button>
                    <Button pressed={() => this.props.navigation.navigate("Register")}> REGISTER </Button>
                </View>
            </View>
        )
    }

    login(){
        UserController.userLogin(this.state.username,this.state.password)
        .then(response => response.headers.map.authorization.replace("Bearer", "").trim(""))
        .then(newToken => {if(newToken!=null)this.props.navigation.navigate("Home",{token:newToken,username:this.state.username})})
        .catch(err => console.log(err));
    }
}
