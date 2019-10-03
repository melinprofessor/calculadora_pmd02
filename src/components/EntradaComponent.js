import React from 'react';
import {View, StyleSheet} from 'react-native';
import  NumeroComponent from './NumeroComponent';

const estilo = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

const EntradaComponent = props => {
    return (
        <View style={estilo.numeros}>
            <NumeroComponent numero={props.numero1} onChangeTextHandler={props.onChangeTextHandler} nome='numero1'/>
            <NumeroComponent numero={props.numero2} onChangeTextHandler={props.onChangeTextHandler} nome='numero2'/>
        </View>
    )
}

export default EntradaComponent;