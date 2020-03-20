import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import MailDetails from '../screens/MailDetails';

const screens = {
  Home: {
    screen: Home
  },
  MailDetails: {
    screen: MailDetails
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
