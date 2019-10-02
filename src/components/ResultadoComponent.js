import React from 'react';
import {View} from 'react-native';
import VisorComponent from './VisorComponent';

export const ResultadoComponent = props => {
    return (
        <View>
            <VisorComponent resultado={props.resultado}/>
        </View>
    )
}