import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

const InputBox = ({ placeholder,onChangeText,secureTextEntry }) => {
  return (
    <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} onChangeText={onChangeText} style={styles.inputText}/>
  );
};

const styles = StyleSheet.create({
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
});

export default InputBox;