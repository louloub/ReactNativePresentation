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

    const buttonDefinition = () =>
    Alert.alert(
      "Quelques définitions",
      "- On appelle framework front-end tout ensemble de classes, fonctions et utilitaires qui nous facilite la création d'applications. Un framework appelle notre propre code, là où c'est notre code qui appelle celui d'une bibliothèque.  \n - On appelle une librairie quand nous avons un besoin particulier. Nous pouvons ainsi réutiliser du code déjà existant pour une fonctionnalité précise \n - En informatique, le logiciel multiplateforme est un logiciel informatique implémenté sur plusieurs plates-formes informatiques. ",
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
      <Button title="Quelques définitions" onPress={buttonDefinition}  />
  
      <Spacer />
    </Center>
  );
};

export default App

/*
<Button title="React & React Native" onPress={buttonReactAndReactNative}  />
      <Button title="Qui utilise React Native" onPress={buttonWhosUseReactNative}  />
      <Button title="Job" onPress={buttonJob}  />
*/