import React, { Component } from 'react';
import {View,Text} from 'react-native';
import style from '../styles/loginStyle';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import UserController from '../controller/UserController';
import User from '../entities/User';

export default class ProfileScreen extends Component {
    

    constructor(props){
        super(props);
        this.state={
            user: new User(),
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
                    <InputBox placeholder="First Name" value={this.state.user.firstName } onChangeText={(text)=> {this.setState(prevState => ({user:{...prevState.user,firstName:text}}))}}  />
                    <InputBox placeholder="Last Name" value={this.state.user.lastName} onChangeText={(text)=> {this.setState(prevState => ({user:{...prevState.user,lastName:text}}))}} />
                    <InputBox placeholder="Email Address" value={this.state.user.email} onChangeText={(text)=> {this.setState(prevState => ({user:{...prevState.user,email:text}}))}} />
                    <InputBox placeholder="Phone Number" value={this.state.user.phoneNumber} onChangeText={(text)=> {this.setState(prevState => ({user:{...prevState.user,phoneNumber:text}}))}} />
                    <Button pressed={this.updateUser.bind(this)} > UPDATE </Button>
                </View>
            </View>
        )
    }

    componentDidMount() {

        this.fillField();
        
    }

    updateUser(){
        var token = this.props.navigation.getParam("token");
        var user = this.state.user;
        UserController.updateUser(user,token);
    }

    fillField(){
        var username =this.props.navigation.getParam("username");
        var token = this.props.navigation.getParam("token");

        UserController.getUser(username,token)
        .then(json => json.json())
        .then(user => this.setState((prevState => ({
            user:{...prevState.user,
                _id:user._id,
                password:user.password,
                username:user.username,
                email:user.email,
                firstName:user.firstName,
                lastName:user.lastName,
                phoneNumber:user.phoneNumber,
                picture:user.picture,
            }}))));
    }
}
