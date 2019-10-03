import React from 'react';
import {Button} from 'react-native';
const ComandoComponent = props => {
// implementar
 return (
     <Button  
     title="Calcular" 
     onPress={()=> { props.calcular()}}/>
 )
}
export default ComandoComponent;