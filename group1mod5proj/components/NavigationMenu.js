import { Text, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import MenuLogo from '../assets/Movie_Tinder.svg';
import RN from 'react-native';

import { SpeedDial, Dialog, CheckBox } from '@rneui/themed';
import { FAB } from "@rneui/base";

const SCREEN_HEIGHT = RN.Dimensions.get('window').height;
const SCREEN_WIDTH = RN.Dimensions.get('window').width;

export default function NavigationMenu() {
    const [open, setOpen] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    const [visible5, setVisible5] = React.useState(false);
    const [checked, setChecked] = React.useState(1);
    const toggleDialog2 = () => {setVisible2(!visible2);};
    const toggleDialog5 = () => {setVisible5(!visible5);};

  return (
    <>
    <SpeedDial
    isOpen={open}
    icon={{name: 'menu', color: '#fff', style: 'styles.menulogo'}}
    openIcon={{ name: 'close', color: '#fff' }}
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
      Small Size
      overlayColor="#454545"
      color="#fcb649"
      title="Genres"
      onPress={toggleDialog5} />
     <FAB
      style={{ width: "200%", margin: 20 }}
      placement="left"
      size="small"
      Small Size
      overlayColor="#454545"
      color="#fcb649"
      title="My Saved"
      onPress={() => alert('Navigating to My Saved page..')} />
    <FAB
      style={{ width: "250%", margin: 20 }}
      placement="left"
      size="small"
      Small Size
      overlayColor="#454545"
      color="#fcb649"
      title="My Account Settings"
      onPress={() => console.log('My Account Settings..')} />
    <FAB
      style={{ width: "150%", margin: 20 }}
      placement="left"
      size="small"
      Small Size
      overlayColor="#454545"
      color="#fcb649"
      title="Log off"
      onPress={toggleDialog2} />
  </SpeedDial>
  {/* Genre Selection */}
  <Dialog
      isVisible={visible5}
      onBackdropPress={toggleDialog5}
    >
      <Dialog.Title title="Select Genre Preference"/>
      {['Comedy', 'Romance', 'Horror'].map((l, i) => (
        <CheckBox
          key={i}
          title={l}
          containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={checked === i + 1}
          onPress={() => setChecked(i + 1)}
        />
      ))}

      <Dialog.Actions>
        <Dialog.Button
          title="CONFIRM"
          onPress={() => {
            console.log(`Option ${checked} was selected!`);
            toggleDialog5();
          }}
        />
        <Dialog.Button title="CANCEL" onPress={toggleDialog5} />
      </Dialog.Actions>
    </Dialog>
    {/* Logging off */}
  <Dialog
  isVisible={visible2}
  onBackdropPress={toggleDialog2}
>
  <Dialog.Title title="Alert"/>
  <Text>Are you sure about logging off?</Text>
  <Dialog.Actions>
    <Dialog.Button title="Yes" onPress={() => {setVisible2(!visible2); setOpen(!open); alert('Logging off now...');}}/>
    <Dialog.Button title="No" onPress={() => {setVisible2(!visible2); setOpen(!open)}}/>
  </Dialog.Actions>
</Dialog>
{/* <TouchableOpacity onPress={() => { this.onSubmit(); this.props.navigation.navigate('NextScreen') }}> */}
</>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignContent: 'center',
      padding: 50,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    menulogo: {
      width: SCREEN_HEIGHT * 0.13,
      height: SCREEN_HEIGHT * 0.13,
      borderRadius: (SCREEN_HEIGHT * 0.13)/2,
    //   position: 'absolute',
      top: (SCREEN_HEIGHT * 0.7)/2,
      left: (SCREEN_WIDTH * 0.6)/2,
      alignContent: 'center',
    }
  })