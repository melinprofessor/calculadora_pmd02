import React, {useState} from 'react';
import {View} from 'react-native';
import EntradaComponent from './EntradaComponent';
import OperacaoComponent from './OperacaoComponent';
import ComandoComponent from './ComandoComponent';



export const PainelComponent = props => {
    console.log(props)
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [selecionado, setSelecionado] = useState(0);

    const onChangeTextHandler = (nomeCampo, valor) => {
        if(nomeCampo === 'numero1') {
            setNumero1(valor)
        } else {
            setNumero2(valor)
        }
    }

    const onValueChange = item => {
        setSelecionado(item);
    }


    const calcular = () => {
        let resultado = null;
        if(selecionado === 1) {
            resultado = numero1 + numero2;
        } else if (selecionado === 2) {
            resultado = numero1 - numero2;
        } else if (selecionado === 3) {
            resultado = numero1 * numero2;
        } else if (selecionado === 4) {
            resultado = numero1 / numero2;
        }

        if(!isFinite(resultado)) {
            resultado = "Error divisão por 0"
        }
        props.resultado(resultado);
    }


    return (
        <View>
            <EntradaComponent
            numero1={numero1}
            numero2={numero2}
            onChangeTextHandler={onChangeTextHandler}
            />
            <OperacaoComponent  
            onValueChange={onValueChange}
            selecionado={selecionado}
            />
            <ComandoComponent
            bloquear={selecionado}
            calcular={calcular}
            />
        </View>
    )
}