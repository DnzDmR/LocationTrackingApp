import React, { Component } from 'react'
import {View,Text,TextInput,Platform} from 'react-native';
import style from '../styles/loginStyle';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import LocationController from '../controller/LocationController';

export default class HomeScreens extends Component {
    
    constructor(props){
        super(props);
    }


    static navigationOptions = ({ navigation }) => {
        return {
        headerStyle: {
            backgroundColor: '#3a495c',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 0.5,
            height: 40
        },

        headerLeft:(
            <View style={{ flexDirection: 'row' }}>
                <Icon style={{marginLeft:15}} size={20} raised name='bars' type='font-awesome' color='#ffffff' onPress={() => alert("Menu")} />
            </View>),
        headerRight:(
            <View style={{ flexDirection: 'row' }}> 
              <Icon style={{marginRight:15}} size={20} raised name='user-plus' type='font-awesome' color='#ffffff' onPress={navigation.getParam('notificationPage')} />
              <Icon style={{marginRight:15}} size={20} raised name='book' type='font-awesome' color='#ffffff' onPress={navigation.getParam('notificationListPage')} />
              <Icon style={{marginRight:15}} size={20} raised name='cog' type='font-awesome' color='#ffffff' onPress={navigation.getParam('profilePage')} />
            </View>
          ),
    }};

    render() {
        return (
            <View style={style.mapContainer}>
                <MapView
                    style={style.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>



                </MapView>
            </View>
        )
    }

    componentDidMount() {
        this.props.navigation.setParams({ profilePage: this.openProfilePage.bind(this) });
        this.props.navigation.setParams({ notificationPage: this.openNotificationPage.bind(this) });
        this.props.navigation.setParams({ notificationListPage: this.openNotificationListPage.bind(this) });
        LocationController.start(this.props.navigation.getParam("username"),this.props.navigation.getParam("token"));
    }

    openProfilePage(){
        this.props.navigation.navigate("Profile",{token:this.props.navigation.getParam("token"),username:this.props.navigation.getParam("username")});    
    }
    
    openNotificationPage(){
        this.props.navigation.navigate("Notification",{token:this.props.navigation.getParam("token"),username:this.props.navigation.getParam("username")});
    }

    openNotificationListPage(){
        this.props.navigation.navigate("NotificationList",{token:this.props.navigation.getParam("token"),username:this.props.navigation.getParam("username")});
    }
}
