
import React from 'react';
import { StyleSheet,Text,View  } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import InstagramScreen from './Screens/in';
import faceBookScreen from './Screens/fb';

export default class App extends React.Component {
  render(){
    return (
    <AppContainer/>
    );
  }
}
const TabNavigator = createBottomTabNavigator ({
  FaceBook:{screen:faceBookScreen},
  Instagram:{screen:InstagramScreen}
});

const AppContainer = createAppContainer(TabNavigator);