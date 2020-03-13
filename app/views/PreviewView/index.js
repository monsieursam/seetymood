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

import * as RNFS from 'react-native-fs';
import Geolocation from '@react-native-community/geolocation'

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
            location: { latitude: 0, longitude: 0}
        }
    }

    componentDidMount() {
        this.findCoordinates()
    }

    findCoordinates = () => {
        let data
		Geolocation.getCurrentPosition(
			position => {
                
                const { coords } = position

                this.setState({ location: {latitude: coords.latitude, longitude: coords.longitude }});
                console.log('youpi g la loca')
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
	};

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

        const { title, description, location } = this.state
        const { urlVideo } = this.props.route.params

        var photo = {
            uri: urlVideo,
            type: 'video/mp4',
            name: urlVideo,
        }        

            console.log('Je lis le fichier')
            console.log(photo);
            console.log(location)
            const formData  = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append('video', photo)
            console.log('location')
            console.log(location)
            // formData.append('location', location)

            console.log(formData)
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
                            onPress = {() => { this.findCoordinates(); this.sendVideo() }}>
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