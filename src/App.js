/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  View,
} from 'react-native';

import {
  LogoComponent, 
  ResultadoComponent, 
  PainelComponent} from './components'

const App = () => {
  const [resultado, setResultado] = useState(0)

  const resultadoFinal = resultado => {
    setResultado(resultado);
  }
  return (
    <View>
      <LogoComponent />
      <ResultadoComponent resultado={resultado} />
      <PainelComponent resultado={resultadoFinal}/>
    </View>
  );
};

export default App;
