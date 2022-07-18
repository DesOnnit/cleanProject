import {Navigation} from 'react-native-navigation';
import {register, loginRoot} from './src/utils/navigate';

register();
Navigation.setDefaultOptions({
  topBar: {
    title: {
      color: 'black',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: 'rgb(25, 118, 210)',
    },
  },
});
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(loginRoot);
});
