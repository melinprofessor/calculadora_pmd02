import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    },
    resultado: {
        alignItems: 'center'
    }
})

const VisorComponent = props => {
    return (
        <View style={estilo.resultado}>
            <TextInput 
            style={estilo.visor}
            placeholder="Resultado"
            value={props.resultado.toString() || '0'}
            />
        </View>
    )
}

export default VisorComponent;