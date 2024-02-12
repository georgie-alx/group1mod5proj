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
    <View >

      {/*Trailer Component*/}
      <Swiper showsButton={false} horizontal={true}>
        {data.map((item, i) => {
          return(
            <View key={i}>
              <Trailer playing={playing} onStateChange={onStateChange} togglePlaying={togglePlaying} id={item["url"]}/> 
              <Text>{item['title']} {item['year']}</Text>

              <TickCross />
              <SwipeUpDown 
                iconSize={30}
                itemMini={<Text>Swipe up here to see more movie info</Text>}
                itemFull={<Synopsis genre={item['genre']} plot={item['plot']} cast={item['cast']}/>}
              />
                {/* <Synopsis genre={item['genre']} plot={item['plot']} cast={item['cast']}/> */}



            </View>
          )
        })}
      </Swiper>


      {/* <TickCross /> Elly*/}
      {/* <Synopsis genre={'genre name'} plot={'plot bla blah'} cast={'actor 1, actor 2'}/> */}
      {/*<Menu /> Sing Hui's */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BrowsingScreen;