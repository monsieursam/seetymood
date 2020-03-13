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
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import { getAllVideo } from '../../api/api';

class FeedView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allVideos: null,
            isFetching: false,
        }

    }

    componentDidMount() {
        this.getAllVideos()
        
    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this.getAllVideos() });
     }

    goToVideo = (id) => {
        console.log(id)
        console.log(this.props)
        this.props.navigation.navigate('Video', { idVideo: id})
    }

    getAllVideos = async() => {
        try {
            const response = await fetch('https://hackathon.seetymood.com/api/videos');
            const responseJson = await response.json();

            this.setState({allVideos: responseJson, isFetching:false})

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
        const { allVideos, isFetching } = this.state
    
        console.log(allVideos)
        return (
        <View style={styles.container}>
            {allVideos && <FlatList 
                onRefresh={() => this.onRefresh()}
                keyExtractor={this.renderMyKeyExtractor}
                data={allVideos} 
                style={styles.scrollView} 
                renderItem={this.renderMyList}
                refreshing={isFetching}
                />
            }
                
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
