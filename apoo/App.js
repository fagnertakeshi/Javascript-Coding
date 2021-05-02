import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';
import { WebView } from 'react-native-webview';


export default class App extends Component{
  

getUrlBarCode =() => {
    alert('Teste')
    console.log('Teste');
    
  }  
   render() {

    return (
      <>
      <View style={styles.container}>
      <FAB
      style={styles.fab}
      small
      icon="plus"
      onPress={this.getUrlBarCode}
      /> 
      <Button
          title="Press me"
          onPress={() => alert('Simple Button pressed')}
        />
      </View>
    
      <SafeAreaView style={styles.flexContainer}>
          <WebView source={{ uri: 'https://apoo.com.br/' }} 
          />   
      </SafeAreaView>
      </>
    
    );
  }

}  
const styles = StyleSheet.create({
  container: {
    height:'10%',
  },
  flexContainer: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 0,
  },
});
