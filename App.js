import React from 'react';
import CustomButton from './components/CustomButton';
import Spacer from './components/Spacer';
import Center from './components/Center';
import ButtonIntroduction from './components/ButtonIntroduction';
import ButtonDefinition from './components/ButtonDefinition';
import ButtonReactAndReactNative from './components/ButtonReactAndReactNative';
import ButtonWhoUseReactNative from './components/ButtonWhoUseReactNative';
import { Button, Image } from 'react-native';

const App = () => {

  return (
    <Center> 
      <Image source={require('./LOGO_WCS3.png')} />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Button title="Introduction" onPress={ButtonIntroduction}  />
      <Spacer />
      <Button title="Quelques définitions" onPress={ButtonDefinition}  />
      <Spacer />
      <Button title="React & React Native" onPress={ButtonReactAndReactNative}  />
      <Spacer />
      <Button title="Qui utilise React Native ?" onPress={ButtonWhoUseReactNative}  />
      <Spacer />
    </Center>
  );
};

export default App