import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Animated, PanResponder, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.5 * SCREEN_WIDTH;

const DragScreenSelection = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' },
  ]);

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
      if (direction === 'right') {
        // Save the movie
        console.log('Saved:', movies[index].title);
      } else {
        // Reject the movie
        console.log('Rejected:', movies[index].title);
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
          <Text>{movie.title}</Text>
        </Animated.View>
      );
    });
  };

  return <View style={styles.container}>{renderMovies()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: SCREEN_WIDTH * 1,
    height: SCREEN_WIDTH * 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default DragScreenSelection;
