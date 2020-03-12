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
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { getAllVideo } from '../../api/api';

import Video from 'react-native-video';

class VideoView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            video: null
        }
    }

    componentDidMount() {
        this.getOneVideo()
        
    }

    goToVideo = id => {
        console.log(id)
    }

    getOneVideo = async() => {
        const { idVideo } = this.props
        try {
            const response = await fetch(`https://hackathon.seetymood.com/api/videos/${idVideo}`);
            const responseJson = await response.json();

            this.setState({allVideos: responseJson})
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        const { video } = this.state
    
        return (
        <View style={styles.container}>
                {video && (
                    <Video source={{uri: video.file}}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} />
                )}
        </View>
        )
    }
};

const styles = StyleSheet.create({
    icon: {
      color: 'blue'
    },
    container: {
        flex: 1,
    },
    scrollView: {
       width: '100%',
       height: '100%'
    },
    backgroundVideo: {
        width: '100%',
        height: 500
    }
})


export default VideoView;
