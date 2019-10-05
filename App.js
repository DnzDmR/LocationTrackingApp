import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './source/screens/LoginScreen';
import HomeScreen from './source/screens/HomeScreen';
import RegisterScreen from './source/screens/RegisterScreen';
import ProfileScreen from './source/screens/ProfileScreen';
import NotificationScreen from './source/screens/NotificationScreen';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen,navigationOptions:{header:null}},
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Notification: {screen: NotificationScreen},
  Register: {screen: RegisterScreen,navigationOptions:{header:null}},
});

const App = createAppContainer(MainNavigator);

export default App;
