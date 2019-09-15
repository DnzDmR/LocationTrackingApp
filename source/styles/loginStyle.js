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
    }
});