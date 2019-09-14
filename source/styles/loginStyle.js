import {Dimensions,StyleSheet} from 'react-native';

export default StyleSheet.create({

    baseContainer:{
        backgroundColor: "#f2ecff",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    loginButton:{
        backgroundColor:"#3a495c",
        padding:15,
        flexGrow:1,
        alignItems:"center",
        marginLeft:"5%",
        marginRight:"5%",
        marginTop:5, 
        marginBottom:10,
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    inputText:{
        marginTop:5, 
        marginBottom:10,
        textAlign: 'center',
        borderRightWidth: 0.2,
        borderLeftWidth: 0.2,
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        borderColor: "#3a495c",
        marginLeft:"5%",
        marginRight:"5%",
        color: '#3a495c',
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