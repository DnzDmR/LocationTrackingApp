import {Dimensions,StyleSheet} from 'react-native';

export default StyleSheet.create({

    baseContainer:{
        backgroundColor: "#f2ecff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    logo: {
        height:100,
        width:100,
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',        
        top:50,
    },
    formContainer:{
        width:"100%",
        top:100,    
    },
    mapContainer: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    map: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
    },
    
});