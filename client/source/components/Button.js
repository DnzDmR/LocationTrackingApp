import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ children, pressed }) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={pressed}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Button;