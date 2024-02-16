import React, { useRef, useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, Animated, PanResponder, Dimensions } from 'react-native';
import { useSavedMovies } from "./context/savedMovies";
import Trailer from './Trailer';
import SwipeUpDown from 'react-native-swipe-up-down'
import Synopsis from './Synopsis';
import TickCross from './TickCross';
import { useNavigation } from '@react-navigation/native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;

const DragScreenSelection = ({ data }) => {
  const [movies, setMovies] = useState(data);
  const [completedMovies, setCompletedMovies] = useState(0); // State to track completed movies
  const { addMovie } = useSavedMovies();
  const navigation = useNavigation();


  // Create an animated value for each movie
  const positions = useRef(movies.map(() => new Animated.ValueXY())).current;

  const panResponders = useRef(
    movies.map((_, index) =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gesture) => {
          positions[index].setValue({ x: gesture.dx, y: 0 });
        },
        onPanResponderRelease: (evt, gesture) => {
          if (gesture.dx > SWIPE_THRESHOLD) {
            // Swipe right
            swipe('right', index);
          } else if (gesture.dx < -SWIPE_THRESHOLD) {
            // Swipe left
            swipe('left', index);
          } else {
            // Return card to original position
            resetPosition(index);
          }
        },
      })
    )
  ).current;

  const swipe = (direction, index) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(positions[index], {
      toValue: { x, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      setCompletedMovies(0);
      if (direction === 'right') {
        // Save the movie
        console.log('Saved:', movies[index].title);
         addMovie(movies[index]);
        setCompletedMovies(prevCount => prevCount + 1); // Increment completed movies count
       // setSavedMovies(prevMovies => [...prevMovies, movies[index]]); // Update local state with saved movie
      } else {
        // Reject the movie
        console.log('Rejected:', movies[index].title);
        setCompletedMovies(prevCount => prevCount + 1); // Increment completed movies count
        // setSavedMovies(prevMovies => [...prevMovies, movies[index]]); // Update local state with saved movie
      }
      // Remove the movie from the list
      setMovies((prevMovies) => prevMovies.filter((_, movieIndex) => movieIndex !== index));
    });
  };

  const resetPosition = (index) => {
    Animated.spring(positions[index], {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  // for Trailer
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      console.log('setting playing to false')
      setPlaying(false);
    }
  }, [])
  const togglePlaying = useCallback(() => {
    console.log('toggle playing')
    setPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    // Check if all movies are completed
    if (completedMovies > (movies.length)) {
      console.log("All movies completed");
      // Handle logic for all movies completed
      navigation.navigate('EndScreen', { message: "You've reach the end of our movie list!" });
    }
  }, [completedMovies, movies.length, navigation]);

  const renderMovies = () => {
    return movies.map((movie, index) => {
      return (
        <Animated.View
          key={movie.id}
          style={[
            styles.card,
            {
              transform: [
                { translateX: positions[index].x },
                {
                  rotate: positions[index].x.interpolate({
                    inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
                    outputRange: ['70deg', '0deg', '-70deg'],
                  }),
                },
              ],
            },
          ]}
          {...panResponders[index].panHandlers}
        >
          <Trailer playing={playing} onStateChange={onStateChange} togglePlaying={togglePlaying} id={movie.url} />
          <Text style={styles.title}>{movie.title} ({movie.year})</Text>
          <TickCross swipe={(direction) => swipe(direction, index)} />
          <SwipeUpDown
            swipeHeight={100}
            iconSize={30}
            itemMini={<Text style={styles.miniItem}>▲ MORE</Text>}
            itemFull={<Synopsis genre={movie.genre} plot={movie.plot} cast={movie.cast} />}
          />
        </Animated.View>
      );
    });
  };

  if (movies.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No more movies to show</Text>
      </View>
    );
  }

  return <View style={styles.container}>
    {renderMovies()}
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: SCREEN_WIDTH * 1,
    height: SCREEN_WIDTH * 2,
    backgroundColor: '#2A1A1D',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  miniItem: {
    backgroundColor: '#FCB649',
    height: 30,
    textAlign: 'center',
    top: (SCREEN_HEIGHT * 0.15) / 2,
  },
});

export default DragScreenSelection;

