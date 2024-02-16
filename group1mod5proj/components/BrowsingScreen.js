/*
Elly's notes 12/2/2024:
- integrate with Georgie's bit (useContext?)
- improve swiping (Anu)
- integrate with Sing's Menu
- Shift video a bit lower down
- Integrate API?
- Randomize movie list
- Autoplay the trailer
*/


// BrowsingScreen.js
import React, { useState, useCallback, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRoute } from "@react-navigation/native";

import * as CONSTANT from './MockData';
import DragScreenSelection from './DragScreenSelection';

const BrowsingScreen = () => {

  // for genre selection
  const route = useRoute();
  const genreSelected = route.params?.genreSelected || [];
  console.log("BrowsingScreen received these updated genres:", genreSelected);
  
  const [data, setData] = useState(CONSTANT['MOCKDATA']);

  const filteredData = useMemo(() => {
    //console.log("filteredData function called")
    return CONSTANT['MOCKDATA'].filter(movie => genreSelected.includes(movie.genre));
  }, [genreSelected]);


  const [ playing, setPlaying ] = useState(false);
  const onStateChange = useCallback((state) => {
      if (state === 'ended'){
          setPlaying(false);
      }
  }, [])

  const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
  }, []);

  const swiperRef = useRef(null);
  const handleSwipe = useCallback((direction) => {
    if (swiperRef.current) {
      if (direction === 'left') {
        swiperRef.current.scrollBy(-1, true);
      } else if (direction === 'right') {
        swiperRef.current.scrollBy(1, true);
      }
    }
  }, []);

  //data = CONSTANT['MOCKDATA']

  return (
    <View>
      <DragScreenSelection data={filteredData} />

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