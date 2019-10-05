import React, { Component } from 'react';
import {View,Text} from 'react-native';
import style from '../styles/loginStyle';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import UserController from '../controller/UserController';

export default class NotificationScreen extends Component {
    

    constructor(props){
        super(props);
        this.state={
            receiver:"",
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
        headerStyle: {
            backgroundColor: '#3a495c',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 0.5,
            height: 40
        },
    }};

    render() {
        return (
            <View style={style.baseContainer}>
                <View style={style.formContainer}>
                    <InputBox placeholder="Receiver Username" value={this.state.receiver } onChangeText={(text)=> {this.setState({receiver:text})}}  />
                    <Button pressed={this.sendRequest.bind(this)} > Send </Button>
                </View>
            </View>
        )
    }

    sendRequest(){

    }

}
