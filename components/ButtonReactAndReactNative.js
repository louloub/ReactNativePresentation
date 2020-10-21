import { Alert } from 'react-native';

const buttonReactAndReactNative = () =>
    Alert.alert(
      "Quelques définitions",
      "- Développé et appartenant à Facebook \n- Approche basée composant \n- Actualisation ciblée du contenu \n- Javascript <3 \n- Communauté importante ",
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

export default buttonReactAndReactNative    