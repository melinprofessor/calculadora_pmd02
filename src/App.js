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

import {LogoComponent, ResultadoComponent} from './components'

const App = () => {
  const [resultado, setResultado] = useState(0)
  return (
    <View>
      <LogoComponent />
      <ResultadoComponent resultado={resultado} />
    </View>
  );
};

export default App;
