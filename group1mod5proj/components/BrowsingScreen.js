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
import React, { useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import * as CONSTANT from './MockData';
import DragScreenSelection from './DragScreenSelection';

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

  data = CONSTANT['MOCKDATA']

  return (
    <View>
      <DragScreenSelection data={data} />

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