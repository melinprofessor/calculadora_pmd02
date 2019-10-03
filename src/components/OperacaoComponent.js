import React from 'react';
import { Picker } from 'react-native';

const OperacaoComponent = props => {
    return(
        <Picker
        selectedValue={props.selecionado}
        onValueChange={(item) => {props.onValueChange(item)}}>
            <Picker.Item label="Escolha a opção" value={0} />
            <Picker.Item label="Somar" value={1} />
            <Picker.Item label="Subtração" value={2} />
            <Picker.Item label="Multiplicação" value={3} />
            <Picker.Item label="Divisão" value={4} />
        </Picker>
    )
}

export default OperacaoComponent;