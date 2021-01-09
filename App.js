import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ComponentsExercice1 from './src/screens/ComponentsExercice1';
import ListeEcran from './src/screens/ListeEcran';
import Exercice2 from './src/screens/Exercice2';
import ImageScreen from './src/screens/ImageScreen';
import Counter from './src/screens/Counter';
import ColorScreen from './src/screens/ColorScreen';
import Colorconfig from './src/screens/Colorconfig';
import ColorConfig2 from './src/screens/ColorConfig2';
import CounterScreen from './src/screens/CounterScreen';
import TextScreen from './src/screens/TextScreen';
import GameCube from './src/screens/GameCube.js';



// le navgator est un élément qui permet l'affichage des composants 
// il permet de configurer les differente page d'affichage
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exercice: Exercice2,
    Liste: ListeEcran,
    ImageScreen : ImageScreen,
    Counter : Counter,
    ColorScreen : ColorScreen,
    Colorconfig : Colorconfig,
    ColorConfig2 : ColorConfig2,
    CounterScreen : CounterScreen,
    TextScreen : TextScreen,
    GameCube: GameCube

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    },
  }
);
export default createAppContainer(navigator);
