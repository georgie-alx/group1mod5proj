import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Trailer = (props) =>{
    return (
        <View style={styles.container}>
            {/*Adds spacing*/}
            {/* <View style={{height: 500, width: 50, backgroundColor: 'red'}}></View> */}
            
            <YoutubePlayer
                height={300}
                width={300}
                play={props.playing}
                videoId={props.id.replace('https://www.youtube.com/watch?v=', '')}
                onChangeState={props.onStateChange}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
      /*backgroundColor: 'yellow',*/
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },
});

export default Trailer;
