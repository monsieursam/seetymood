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
import { faShareSquare } from '@fortawesome/free-solid-svg-icons'

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class PreviewView extends Component {
    render() {
        const { urlVideo } = this.props.route.params
        return (
            <View>
                <Text>{urlVideo}</Text>
                <FontAwesomeIcon icon={ faShareSquare } style={style.icon} />
            </View>
        )
    }
};

const style = StyleSheet.create({
    icon: {
      color: 'blue'
    }
})

export default PreviewView;