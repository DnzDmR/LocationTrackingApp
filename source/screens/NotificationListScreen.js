import React, { Component } from 'react';
import {View,Text,FlatList,Alert} from 'react-native';
import style from '../styles/loginStyle';
import Button from '../components/Button';
import InputBox from '../components/InputBox';
import NotificationController from '../controller/NotificationController';

export default class NotificationListScreen extends Component {
    

    constructor(props){
        super(props);
        this.state={
            receiver:"",
            dataSource:[],
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
        
                    <FlatList
                    
                    data={this.state.dataSource}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => 
                    
                    {
   
                        if(item.status == 0){
                            return <Text onPress={this.getListViewItem.bind(this, item)}>{item.sender + "asda"}  </Text>
                        }
                        else if(item.status == 1){
                            return <Text onPress={this.getListViewItem.bind(this, item)}>{item.sender + "Faloowing"} </Text>
                        }
                        
                    }
                    
                
                    }  
                    ItemSeparatorComponent={this.renderSeparator}      
                
                
                    
                    />

                </View>
            </View>
        )
    }

    componentDidMount() {
        NotificationController.getUserNotification(this.props.navigation.getParam("username"),this.props.navigation.getParam("token"))
        .then(e=>e.json())
        .then(res => this.setState({dataSource:res}));
    }

     
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  
  
    getListViewItem = (item) => {  
        
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Accept', onPress: () => {
                item.status=1;
                NotificationController.sendNotification(item,this.props.navigation.getParam("token"));

              }},
              {text: 'Delete', onPress: () => {
                item.status=-1;
                NotificationController.sendNotification(item,this.props.navigation.getParam("token"));

              }},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel', },
            ],
            {cancelable: false},
          );
    }  

  
 

}
