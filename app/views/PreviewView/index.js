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
import Video from 'react-native-video';

import RNFS from 'react-native-fs'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity, 
  TextInput
} from 'react-native';
import { Fragment } from 'react';
import { useNavigationBuilder } from '@react-navigation/native';

class PreviewView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            video: null,
            description: null,
            location: null
        }
    }

    handleTitle = (text) => {
        this.setState({ title: text })
    }

    handleDescription = (text) => {
        this.setState({ description: text })
    }

    handleLocation = (text) => {
        this.setState({ location: text })
    }
    sendVideo = async() => {
        if (!this.state) {
            return
        }
        const { urlVideo } = this.props.route.params
        const { title, description } = this.state

        RNFS.readFile(urlVideo, "base64").then(data => {
            // binary data
            console.log(data, description, title);
            const formData  = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append('file', urlVideo)
            fetch('https://hackathon.seetymood.com/api/videos', {  
                method: 'POST',
                body: formData
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('espagne')
                console.log(responseData);
            })
            .catch((error) => {
                console.log('bresil')
                console.log(error);
            })
        });
    }

    render() {
        const { urlVideo } = this.props.route.params
        return (
            <View>
                {urlVideo && (
                    <React.Fragment>
                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Title"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText = {this.handleTitle}/>

                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Description"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText = {this.handleDescription}/>

                        <Video source={{uri: urlVideo}}   // Can be a URL or a local file.
                            ref={(ref) => {
                            this.player = ref
                            }}                                      // Store reference
                            onBuffer={this.onBuffer}                // Callback when remote video is buffering
                            onError={this.videoError}               // Callback when video cannot be loaded
                            style={styles.backgroundVideo} />
                        <TouchableOpacity style = {styles.submitButton} 
                            onPress = {() => this.sendVideo()}>
                            <FontAwesomeIcon icon={ faShareSquare } style={styles.icon} />
                        </TouchableOpacity>
                    </React.Fragment>
                )}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    icon: {
      color: 'blue'
    },
    backgroundVideo: {
        width: 400,
        height: 400
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
})

export default PreviewView;