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
  StyleSheet
} from 'react-native';
import { getAllVideo } from '../../api/api';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class FeedView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allVideos: []
        }

    }

    componentDidMount() {
        this.setState({allVideos: []})
    }

    render() {
        const { allVideos } = this.state
        
        console.log(allVideos)
        return (
        <View>
            {allVideos && allVideos.map(video => <Text>{video}</Text>)}
            <Text>Je suis un petit plop</Text>
            <FontAwesomeIcon icon={ faCoffee } style={style.icon} />
        </View>
        )
    }
};

const style = StyleSheet.create({
    icon: {
      color: 'blue'
    }
  })


export default FeedView;
