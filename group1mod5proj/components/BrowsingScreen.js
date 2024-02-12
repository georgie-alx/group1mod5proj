/*
Elly's notes 12/2/2024:
- Need to implement handlers for tick and cross
- Shift video a bit lower down
- Integrate API?
- Randomize movie list
- Autoplay the trailer
*/


// BrowsingScreen.js
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper'; 
import Synopsis from './Synopsis';
import Trailer from './Trailer';
import TickCross from './TickCross';
import SwipeUpDown from 'react-native-swipe-up-down'
import * as CONSTANT from './MockData';

const BrowsingScreen = () => {
  const [ playing, setPlaying ] = useState(false);
  const onStateChange = useCallback((state) => {
      if (state === 'ended'){
          setPlaying(false);
      }
  }, [])

  const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
  }, []);

  data = CONSTANT['MOCKDATA']

  return (
    <View style={{backgroundColor: '#2A1A1D'}}>

      <Swiper showsButton={false} horizontal={true}>
        {data.map((item, i) => {
          return(
            <View key={i}>
              {/*Trailer Component*/}
              <Trailer playing={playing} onStateChange={onStateChange} togglePlaying={togglePlaying} id={item["url"]}/> 
              {/*Movie Title and Year*/}
              <Text style={styles.title}>{item['title']} ({item['year']})</Text>
              <TickCross />
              {/*Synopsis*/}
              <SwipeUpDown 
                iconSize={30}
                itemMini={<Text style={styles.text}>Swipe up here to see more movie info</Text>}
                itemFull={<Synopsis genre={item['genre']} plot={item['plot']} cast={item['cast']}/>}
              />
            </View>
          )
        })}
      </Swiper>

      {/*<Menu /> Sing Hui's */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#fff',
  }
});

export default BrowsingScreen;