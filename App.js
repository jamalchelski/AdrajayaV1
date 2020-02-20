import React, { Component } from 'react';
import Router from './src/config/routers';
import 'react-native-gesture-handler';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}
export default App;

