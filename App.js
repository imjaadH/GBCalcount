/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,WebView} from 'react-native';
const PolicyHTML = require('./calorie-counter.html')

export default class App extends Component {
  render() {
    if(Platform.OS == 'ios')
{
    return (
      <WebView
      domStorageEnabled
      allowFileAccess
      scalesPageToFit={true}

      source={PolicyHTML} 

  style={{flex: 1}}
 />
    ) }
    else {
      return (
     
        <WebView
        domStorageEnabled
        allowFileAccess
        scalesPageToFit={true}
  
        source={{uri:'file:///android_asset/index.html'}} 
  
    style={{flex: 1}}
   />
      )
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
