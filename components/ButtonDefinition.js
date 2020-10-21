import { Alert } from 'react-native';

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

export default buttonDefinition    