import { React, useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import { useSavedMovies } from "./context/savedMovies";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const windowHeight = Dimensions.get("window").height;

const extractVideoId = (url) => {
  const videoIdRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(videoIdRegex);
  return match ? match[1] : null;
};

const MovieDetailsModal = ({ visible, movie, onClose }) => {
  if (!movie) {
    // If movie is null, return null or some other placeholder component
    return null;
  }

  //for YoutubePlayer
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      console.log("setting playing to false");
      setPlaying(false);
    }
  }, []);

  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView>
        <View
          style={[
            styles.modalContainer,
            { minHeight: windowHeight, backgroundColor: "#FEE9C6" },
          ]}
        >
          <YoutubePlayer
            height={230}
            width={350}
            play={playing}
            videoId={movie.url.replace("https://www.youtube.com/watch?v=", "")}
            onChangeState={onStateChange}
          />
          <Text style={styles.modalHeading}>{movie.title}</Text>
          <View style={styles.details}>
            <Text style={styles.detail}>
              <Text style={{ fontWeight: "bold" }}>Genre:</Text> {movie.genre}
            </Text>
            <Text style={styles.detail}>
              <Text style={{ fontWeight: "bold" }}>Year:</Text> {movie.year}
            </Text>
            <Text style={styles.detail}>
              <Text style={{ fontWeight: "bold" }}>Cast:</Text> {movie.cast}
            </Text>
            <Text style={styles.detail}>
              <Text style={{ fontWeight: "bold" }}>Description:</Text>{" "}
              {movie.plot}
            </Text>
          </View>
          <Button title="Close" onPress={onClose} />
        </View>
      </ScrollView>
    </Modal>
  );
};

const SavedMoviesScreen = () => {
  // Use the custom hook to access the saved movies list
  const { savedMovies, deleteMovie } = useSavedMovies();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to generate image source based on YouTube video URL
  const getImageSource = (url) => {
    const videoId = extractVideoId(url);
    return { uri: `https://img.youtube.com/vi/${videoId}/0.jpg` };
  };

  const openModal = (item) => {
    setSelectedMovie(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalVisible(false);
  };

  // Render individual movie item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
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
    </TouchableOpacity>
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
      <MovieDetailsModal
        visible={modalVisible}
        movie={selectedMovie}
        onClose={closeModal}
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
    fontSize: 20,
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
    width: 120,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
  },
  details: {
    flex: 1, // Take remaining space
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 80,
    backgroundColor: "#FEE9C6",
  },
  modalImage: {
    marginTop: 40,
    width: 350,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
  },
  modalHeading: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2A1A1D",
  },
  YoutubePlayer: {
    marginTop: 40,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default SavedMoviesScreen;
