/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';

export default class App extends Component<Props> {

  gerarFrase(){
    frases = ['a', 'b', 'c', 'd', 'e'];
    numAleatorio = Math.floor(Math.random()*5, 0);
    frase = frases[numAleatorio];

    Alert.alert(frase);
  }

  render() {
    return (
      <View style={styles.principal}>

        <Image
          source={require('./img/logo.png')}
        />

        <TouchableOpacity style={styles.botao} onPress={() => {this.gerarFrase()}}>
          <Text style={styles.textoBotao}>Botao</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },

});
