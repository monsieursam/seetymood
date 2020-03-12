/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class PreviewView extends Component {
    render() {
        return (
            <View>
                <Text>Preview</Text>
                <FontAwesomeIcon icon={ faCoffee } />
            </View>
        )
    }
};

export default PreviewView;