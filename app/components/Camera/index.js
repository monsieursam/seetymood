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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faArrowCircleRight, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { RNCamera } from 'react-native-camera';

export class Camera extends Component {
  state = {
    type: RNCamera.Constants.Type.back,
    recordOptions: {
      mute: false,
      maxDuration: 5,
      quality: RNCamera.Constants.VideoQuality['288p'],
    },
    show: true,
    flashMode: RNCamera.Constants.FlashMode.off
  };

/*   renderVideoButton = (isValid) => {
    const { isRecording } = this.state

    if (!isValid) {
      return (
        <TouchableOpacity onPress={() => this.yo()}>
          <FontAwesomeIcon icon={ faCircle } style={styles.recordingButton} size={ 64 } />
        </TouchableOpacity>
      );
    }
    else {
      return (
        <TouchableOpacity onPress={() => this.yo()}>
          <FontAwesomeIcon icon={ faStopCircle } style={styles.recordingButton} size={ 64 } />
        </TouchableOpacity>
      );
    }
  } */

  yo = () => {
    alert('yo')
  }


  flipCamera = async() => {
    this.setState({
        type:
            this.state.type === RNCamera.Constants.Type.back
                ? RNCamera.Constants.Type.front
                : RNCamera.Constants.Type.back
    })
  };

  activateFlash = async() => {
    this.setState({
      flashMode:
        this.state.flashMode === RNCamera.Constants.FlashMode.off
          ? RNCamera.Constants.FlashMode.on
          : RNCamera.Constants.FlashMode.off
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
    const { type , isRecording} = this.state;
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
                <TouchableOpacity onPress={this.activateFlash} style={styles.flashButton}>
                  < FontAwesomeIcon icon={ faBolt } style={styles.recordingButton} size={ 22 } />
                </TouchableOpacity>
            </View>
            <View style={styles.topButtons}>
                <TouchableOpacity onPress={this.flipCamera} style={styles.flipButton}>
                < FontAwesomeIcon icon={ faArrowsAltV } style={styles.recordingButton} size={ 22 } />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomButtons}>
              {!isRecording && <TouchableOpacity onPress={() => this.takeVideo()}>
                <FontAwesomeIcon icon={ faCircle } style={styles.recordingButton} size={ 64 } />
              </TouchableOpacity> }
              {isRecording && <TouchableOpacity onPress={() => this.stopVideo()}>
                <FontAwesomeIcon icon={ faStopCircle } style={styles.recordingButton} size={ 64 } />
              </TouchableOpacity>}
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
  flashButton: {
    flex: 1,
    marginTop: 20,
    left: 20,
    left: 20,
    alignSelf: 'flex-start',
  },
  recordingButton: {
      marginBottom: 10,
  },
  icon: {
    color: 'gray',
  }
});

export default Camera;
