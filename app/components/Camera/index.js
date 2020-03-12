/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export class Camera extends Component {
  state = {
    type: RNCamera.Constants.Type.back,
    recordOptions: {
      mute: false,
      maxDuration: 5,
      quality: RNCamera.Constants.VideoQuality['288p'],
    }
  };

  flipCamera = async() => {
    this.setState({
        type:
            this.state.type === RNCamera.Constants.Type.back
                ? RNCamera.Constants.Type.front
                : RNCamera.Constants.Type.back
    })
  };

  takePhoto = async () => {
    const options = {
        quality: 0.5,
        base64: true,
        width: 300,
        height: 300,
    };
    if (this.camera) {
      const data = await this.camera.takePictureAsync(options);
      console.log('takePicture', data.uri);
    }
  };

  takeVideo = async () => {
    if (this.camera) {
      try {
        const promise = this.camera.recordAsync(this.state.recordOptions);

        if (promise) {
          this.setState({ isRecording: true });
          const data = await promise;
          this.setState({ isRecording: false });
          console.log('takeVideo', data.uri);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  stopVideo = async () => {
    await this.camera.stopRecording();
  }

  render() {
    const { type } = this.state;
    return (
        <View style={styles.container}>
            <RNCamera
                ref={cam => {
                    this.camera = cam;
                }}
                type={type}
                style={styles.preview}
            />
            <View style={styles.topButtons}>
                <TouchableOpacity onPress={this.flipCamera} style={styles.flipButton}>
                  <Text style={{ fontSize: 14 }}> Flip </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomButtons}>
                <TouchableOpacity onPress={this.takeVideo} style={this.state.isRecording ? styles.hidden : styles.recordingButton }>
                  <Text style={{ fontSize: 14}}> photo </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.stopVideo} style={this.state.isRecording ? styles.recordingButton : styles.hidden }>
                    <Text style={{ fontSize: 14 }}> STOP </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
  },
  preview: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  topButtons: {
      flex: 1,
      width: Dimensions.get('window').width,
      alignItems: 'flex-start',
      position: 'absolute'
  },
  bottomButtons: {
      flex: 1,
      width: Dimensions.get('window').width,
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'absolute',
      bottom: 10,

  },
  hidden : {
    width: 0,
    height: 0,
  },
  flipButton: {
      flex: 1,
      marginTop: 20,
      right: 20,
      right: 20,
      alignSelf: 'flex-end',
  },
  recordingButton: {
      marginBottom: 10,
  },
});

export default Camera;
