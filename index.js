/**
 * @format
 */

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import RNCamera from 'react-native-camera';
import App from './app/App';
import {name as appName} from './app.json';
import PhotoCamera from './android/app/src/components/PhotoCamera'

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(PhotoCamera, () => App);