import React, { Component } from 'react';
import {View,Text} from 'react-native';
import style from '../styles/loginStyle';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import UserController from '../controller/UserController';

export default class ProfileScreen extends Component {
    

    constructor(props){
        super(props);
        this.state={
            _id:"",
            username:"",
            password:"",
            phoneNumber:"",
            firstName:"",
            email:"",
            lastName:"",
            picture:"",
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
                    <InputBox placeholder="First Name" value={this.state.firstName } onChangeText={(text)=> {this.setState({firstName:text})}}  />
                    <InputBox placeholder="Last Name" value={this.state.lastName} onChangeText={(text)=> {this.setState({lastName:text})}} />
                    <InputBox placeholder="Email Address" value={this.state.email} onChangeText={(text)=> {this.setState({email:text})}} />
                    <InputBox placeholder="Phone Number" value={this.state.phoneNumber} onChangeText={(text)=> {this.setState({phoneNumber:text})}} />
                    <Button > UPDATE </Button>
                </View>
            </View>
        )
    }

    componentDidMount() {
        var username =this.props.navigation.getParam("username");
        var token = this.props.navigation.getParam("token");

        UserController.getUser(username,token)
        .then(json => json.json())
        .then(user => this.setState({
            _id:user._id,
            password:user.password,
            username:user.username,
            email:user.email,
            firstName:user.firstName,
            lastName:user.lastName,
            phoneNumber:user.phoneNumber,
            picture:user.picture,
        }));

     
    }
}
