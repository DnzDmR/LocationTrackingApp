import React, { Component } from 'react';
import {View,StatusBar,Image} from 'react-native';
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import style from '../styles/loginStyle';

export default class RegisterScreens extends Component {

    constructor(props){
        super(props);

        this.state ={
              username:"",
              password:"",
              phoneNumber:"",
              firstName:"",
              lastName:"",
              picture:"",
              email:"",
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
                    <InputBox placeholder="Email Address" onChangeText={(text)=> {this.setState({phoneNumber:text})}} />
                     <Button > CREATE </Button>
                     <Button pressed={() => this.props.navigation.navigate("Login")}> RETURN </Button>
                </View>
            </View>
        )
    }
}
