import React, { Component } from 'react'
import {View,Text,TextInput,Platform} from 'react-native';
import style from '../styles/loginStyle';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreens extends Component {
    
    static navigationOptions = {
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
              <Icon style={{marginRight:15}} size={20} raised name='user-plus' type='font-awesome' color='#ffffff' onPress={() => alert("Add")} />
              <Icon style={{marginRight:15}} size={20} raised name='book' type='font-awesome' color='#ffffff' onPress={() => alert("List")} />
              <Icon style={{marginRight:15}} size={20} raised name='cog' type='font-awesome' color='#ffffff' onPress={() => alert("Settings")} />
            </View>
          ),
    };

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
}
