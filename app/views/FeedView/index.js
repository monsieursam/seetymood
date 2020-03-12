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

class FeedView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allVideos: null
        }

    }

    componentDidMount() {
        this.getAllVideos()
        
    }

    goToVideo = (id) => {
        console.log(id)
        console.log(this.props)
        this.props.navigation.navigate('Video')
    }

    getAllVideos = async() => {
        try {
            const response = await fetch('https://hackathon.seetymood.com/api/videos');
            const responseJson = await response.json();

            this.setState({allVideos: responseJson})
        }
        catch (error) {
            console.error(error);
        }
    }

    renderMyKeyExtractor=(item)=>item._id

    renderMyList = ({item})=>(
        <TouchableOpacity onPress={() => this.goToVideo(item._id)}>
            <View style={{justifyContent:'center',marginBottom:10}}>
                <Text style={{backgroundColor:'blue',color:'white',padding:10,width: '100%'}}>
                {item.title}
                </Text>
                <Text style={{backgroundColor:'blue',color:'white',padding:10,width: '100%'}}>
                {item.description}
                </Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        const { allVideos } = this.state
    
        console.log(allVideos)
        return (
        <View style={styles.container}>
            {allVideos && <FlatList 
                keyExtractor={this.renderMyKeyExtractor}
                data={allVideos} 
                style={styles.scrollView} 
                renderItem={this.renderMyList}
                />
            }
                {/* {allVideos && allVideos[0] && (
                    <Video source={{uri: allVideos[0].file}}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} />
                )}
                {allVideos && !allVideos.map(video => video.file && (
                <View key={video.id}>
                    {console.log(video.file)}
                    <Text>{video.description}</Text>
                    <Video source={{uri: video.file}}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} />
                </View>))} */}
                
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


export default FeedView;
