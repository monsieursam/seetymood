/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'

import 'react-native-gesture-handler';

import Swiper from 'react-native-swiper'
import FeedView from '../FeedView';
import CameraView from '../CameraView';


class SwiperView extends Component {
  render() {
    console.log(this.props)

  return (
    <Swiper styles={styles.wrapper} showsPagination={false} loop={false}>
      <CameraView {...this.props} />
      <FeedView {...this.props} />
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



export default SwiperView;
