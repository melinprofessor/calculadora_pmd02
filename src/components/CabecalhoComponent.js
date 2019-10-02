import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    topo:{
        backgroundColor: '#2118F3',
        padding: 10,
    },
    txtTitulo: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center'
    }
});

const CabecalhoComponent = (props) => {
    return (
        <View style={estilo.topo}>
            <Text style={estilo.txtTitulo}>Calculadora 1.0</Text>
        </View>
    )

}

export default CabecalhoComponent;