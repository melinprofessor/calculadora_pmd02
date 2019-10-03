import React from 'react';
import {Button} from 'react-native';
const ComandoComponent = props => {
// implementar
 return (
     <Button
     disabled={props.bloquear === 0 ? true : false}
     title="Calcular" 
     onPress={()=> { props.calcular()}}/>
 )
}
export default ComandoComponent;