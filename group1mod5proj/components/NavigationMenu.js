import { Text, View, Image, StyleSheet } from "react-native";
import React, { Component } from "react";
// import MenuLogo from "../assets/Movie_Tinder.svg";
import RN from "react-native";

import { SpeedDial, Dialog, CheckBox } from "@rneui/themed";
import { FAB } from "@rneui/base";

import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = RN.Dimensions.get("window").height;
const SCREEN_WIDTH = RN.Dimensions.get("window").width;

export default function NavigationMenu({ isLoggedIn, setIsLoggedIn }) {
  const navigation = useNavigation();
  const [open, setOpen] = React.useState(false);
  const [logoffVisible, setLogoffVisible] = React.useState(false);
  const [genreVisible, setGenreVisible] = React.useState(false);
  const toggleLogoffDialog = () => {
    setLogoffVisible(!logoffVisible);
  };
  const toggleGenreDialog = () => {
    setGenreVisible(!genreVisible);
  };

  // Genre selection
  const [checked, setChecked] = React.useState(["Comedy", "Romance", "Horror"]);
  const handleToggleCheckbox = (index) => {
    if (checked.includes(index)) {
      // Item already checked, remove it from the array
      setChecked(checked.filter((item) => item !== index));
    } else {
      // Item not checked, add it to the array
      setChecked([...checked, index]);
    }
  };

  return (
    <>
      {/* start of menu */}
      <SpeedDial
        isOpen={open}
        icon={{ name: "menu", color: "#fff", style: "styles.menulogo" }}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        color="#fcb649"
      >
        {/* <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Add"
      onPress={() => alert('Add Something')}
    />
    <SpeedDial.Action
      icon={{ name: 'delete', color: '#fff' }}
    //   title="Delete"
      onPress={() => console.log('Delete Something')}
    /> */}
        <FAB
          style={{ width: "100%", margin: 20 }}
          placement="left"
          size="small"
          Small
          Size
          overlayColor="#454545"
          color="#fcb649"
          title="Genres"
          onPress={toggleGenreDialog}
        />
        <FAB
          style={{ width: "250%", margin: 20 }}
          placement="left"
          size="small"
          Small
          Size
          overlayColor="#454545"
          color="#fcb649"
          title="Home"
          onPress={() => {
            navigation.navigate("BrowsingScreen", { genreSelected: checked });
            setOpen(!open);
          }}
        />
        <FAB
          style={{ width: "200%", margin: 20 }}
          placement="left"
          size="small"
          Small
          Size
          overlayColor="#454545"
          color="#fcb649"
          title="My Saved"
          // onPress={() => alert("Navigating to My Saved page..")}
          onPress={() => {
            navigation.navigate("SavedMoviesScreen");
            setOpen(!open);
          }}
        />
        <FAB
          style={{ width: "150%", margin: 20 }}
          placement="left"
          size="small"
          Small
          Size
          overlayColor="#454545"
          color="#fcb649"
          title="Log off"
          onPress={toggleLogoffDialog}
        />
      </SpeedDial>
      {/* end of menu */}

      {/* Genre Selection dialog */}
      <Dialog isVisible={genreVisible} onBackdropPress={toggleGenreDialog}>
        <Dialog.Title title="Select Genre Preference" />
        {["Comedy", "Romance", "Horror"].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
            //   checkedIcon="dot-circle-o"
            checkedIcon="check-circle"
            uncheckedIcon="circle-o"
            // checked={checked === i + 1}
            // onPress={() => setChecked(i + 1)}
            checked={checked.includes(l)}
            onPress={() => handleToggleCheckbox(l)}
          />
        ))}
        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            // onPress={() => {
            //   console.log(`Option ${checked} was selected!`);
            //   toggleGenreDialog();
            // }}
            onPress={() => {
              navigation.navigate("BrowsingScreen", { genreSelected: checked });
              console.log(`${checked} was selected!`);
              toggleGenreDialog();
              setOpen(!open);
            }}
          />
          <Dialog.Button
            title="CANCEL"
            onPress={() => {
              toggleGenreDialog();
              setOpen(!open);
            }}
          />
        </Dialog.Actions>
      </Dialog>

      {/* Logging off dialog */}
      <Dialog isVisible={logoffVisible} onBackdropPress={toggleLogoffDialog}>
        <Dialog.Title title="Alert" />
        <Text>Are you sure about logging off?</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="Yes"
            onPress={() => {
              setLogoffVisible(!logoffVisible);
              setOpen(!open);
              alert("Logging off now...");
              setIsLoggedIn(!isLoggedIn);
              navigation.navigate("Welcome");
            }}
          />
          <Dialog.Button
            title="No"
            onPress={() => {
              setLogoffVisible(!logoffVisible);
              setOpen(!open);
            }}
          />
        </Dialog.Actions>
      </Dialog>
      {/* <TouchableOpacity onPress={() => { this.onSubmit(); this.props.navigation.navigate('NextScreen') }}> */}
    </>
  );
}

const styles = StyleSheet.create({
  menulogo: {
    width: SCREEN_HEIGHT * 0.13,
    height: SCREEN_HEIGHT * 0.13,
    borderRadius: (SCREEN_HEIGHT * 0.13) / 2,
    //   position: 'absolute',
    top: (SCREEN_HEIGHT * 0.7) / 2,
    left: (SCREEN_WIDTH * 0.6) / 2,
    alignContent: "center",
  },
});
