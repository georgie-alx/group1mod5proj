import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSavedMovies } from "./context/savedMovies";
import { Ionicons } from "@expo/vector-icons";

const extractVideoId = (url) => {
  const videoIdRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(videoIdRegex);
  return match ? match[1] : null;
};

const SavedMoviesScreen = () => {
  // Use the custom hook to access the saved movies list
  const { savedMovies, deleteMovie } = useSavedMovies();

  // Function to generate image source based on YouTube video URL
  const getImageSource = (url) => {
    const videoId = extractVideoId(url);
    return { uri: `https://img.youtube.com/vi/${videoId}/0.jpg` };
  };

  // Render individual movie item
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={getImageSource(item.url)} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.detail}>Genre: {item.genre}</Text>
        <Text style={styles.detail}>Year: {item.year}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteMovie(item.id)}
        style={styles.deleteButton}
      >
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saved Movies</Text>
      <FlatList
        data={savedMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A1A1D",
    padding: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
    textAlign: "center",
    color: "#FEE9C6",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  listContent: {
    flexGrow: 1,
  },
  card: {
    flexDirection: "row", // Align items horizontally
    backgroundColor: "#FEE9C6",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
  },
  details: {
    flex: 1, // Take remaining space
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default SavedMoviesScreen;
