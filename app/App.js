/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import 'react-native-gesture-handler';

import SwiperView from './views/SwiperView'
import VideoView from './views/VideoView'
import PreviewView from './views/PreviewView'


function LogoTitle() {
  return (
    <View />
  );
}

const Stack = createStackNavigator();

class App extends Component {
  render() {

  return (
    <NavigationContainer>
      <Stack.Navigator
    >
        <Stack.Screen name="Home" component={SwiperView} />
        <Stack.Screen name="Video" component={VideoView} />
        <Stack.Screen name="Preview" component={PreviewView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})



export default App;
