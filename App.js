import React from 'react';
import CustomButton from './components/CustomButton';
import Spacer from './components/Spacer';
import Center from './components/Center';
import Introduction from './components/Introduction';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, StyleSheet, Text, View, Button, Alert } from 'react-native';

const App = () => {

  const buttonIntroduction = () =>
    Alert.alert(
      "Introduction",
      "- React Native est un framework d’application mobile open-source créé Facebook, Inc. en 2015. \n - Il est utilisé pour développer des applications pour Android, Android TV, iOS, macOS, tvOS, Web, Windows et UWP en permettant aux développeurs d’utiliser React avec les capacités de la plate-forme native.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <Center>      
      <Spacer />
      <Button title="Introduction" onPress={buttonIntroduction}  />
      <Spacer />
    </Center>
  );
};

export default App

/* 
<CustomButton
        text='Introduction'
        type='outlined'
        onPress={onPress}  
      />      
      
  const onPress = () => {
    alert('Introduction')
  }
*/