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
import { getAllVideo } from '../../api/api';

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
            <Text>Je suis un fil d'actualité</Text>
        </View>
        )
    }
};



export default FeedView;
