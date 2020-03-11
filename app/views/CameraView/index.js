/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Camera from '../../components/Camera';

class CameraView extends Component {
  render() {
  return (
        <View>
            <Camera />
        </View>
  );
    }
};


export default CameraView;
