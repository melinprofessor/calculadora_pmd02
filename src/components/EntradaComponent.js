import React from 'react';
import {View, StyleSheet} from 'react-native';


const estilo = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

const EntradaComponent = props => {
    return (
        <View style={estilo.numeros}>

        </View>
    )
}