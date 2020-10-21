import { Alert } from 'react-native';

const buttonWhoUseReactNative = () =>
    Alert.alert(
      "Qui utilise React Native ?",
      "- Facebook \n- Facebook Ads Maanger \n- Facebook Analytics \n- Instagram  \n- Skype  \n- Discord  \n- Bloomberg  \n- Pinterest \n- Coinabse  \n- Shopify \n- Tableau  \n- Oculus  \n- Testa \n- Uber Eats \n- Wallmart \n- WIX  \n- ... ",
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

export default buttonWhoUseReactNative    