import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './source/screens/LoginScreens';
import HomeScreen from './source/screens/HomeScreens';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen,navigationOptions:{header:null}},
  Home: {screen: HomeScreen,navigationOptions:{header:null}},
});

const App = createAppContainer(MainNavigator);

export default App;
