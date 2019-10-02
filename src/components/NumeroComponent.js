import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20,
        borderWidth: 1
    }
});

const NumeroComponent = props => {
    return (
        <TextInput
        style={estilo.numero}
        keyboardType={'numeric'}
        value={props.numero1.toString()}
        onChangeText ={ (text)=> {props.onChangeTextHandler(props.nome, parseFloat(text || 0))}}
        />
    )
}

export default NumeroComponent;
