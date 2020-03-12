/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper';
import FeedView from './views/FeedView';
import CameraView from './views/CameraView';
import PreviewView from './views/PreviewView';

class App extends Component {
  render() {
    return (
      <Swiper styles={styles.wrapper} showsButtons={false} showsPagination={false} loop={false}>
        <CameraView />
        <FeedView />
      </Swiper>
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
