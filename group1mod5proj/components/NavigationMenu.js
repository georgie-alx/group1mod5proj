import { Text, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import MenuLogo from '../assets/Movie_Tinder.png';
import RN from 'react-native';

import { Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';
import { SpeedDial } from '@rneui/themed';
import { FAB } from "@rneui/base";

const SCREEN_HEIGHT = RN.Dimensions.get('window').height;
const SCREEN_WIDTH = RN.Dimensions.get('window').width;

export default function NavigationMenu() {
    const [open, setOpen] = React.useState(false);

  return (
    <SpeedDial
    isOpen={open}
    icon={{name: 'menu', color: '#fff', style: 'styles.menulogo'}}
    // style={styles.menulogo}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
  >
    {/* <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Add"
      onPress={() => console.log('Add Something')}
    />
    <SpeedDial.Action
      icon={{ name: 'delete', color: '#fff' }}
      title="Delete"
      onPress={() => console.log('Delete Something')}
    /> */}
    <FAB
      style={{ width: "100%", margin: 20 }}
      placement="left"
      size="small"
      Small Size
      overlayColor="#454545"
      title="Genre"
      onPress={() => console.log('Genre..')} />
     <FAB
      style={{ width: "200%", margin: 20 }}
      placement="left"
      size="small"
      Small Size
      overlayColor="#454545"
      title="My Saved"
      onPress={() => console.log('My Saved..')} />
    <FAB
      style={{ width: "250%", margin: 20 }}
      placement="left"
      size="small"
      Small Size
      overlayColor="#454545"
      title="My Account Settings"
      onPress={() => console.log('My Account Settings..')} />
    <FAB
      style={{ width: "150%", margin: 20 }}
      placement="left"
      size="small"
      Small Size
      overlayColor="#454545"
      title="Log off"
      onPress={() => console.log('Logging off..')} />
  </SpeedDial>
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
    },
    input: {
      height: 40,
      width: 250,
      margin: 10,
      borderWidth: 1,
      padding: 10,
    },
  });
  
// function ExampleMenu() {
//   return (
//     <View>
//         {/* Below is from react-native-popup-menu */}
//         <Menu>
//             <MenuTrigger><Image style={styles.menulogo} source={MenuLogo} /></MenuTrigger>
//                 <MenuOptions>
//                     <MenuOption onSelect={() => alert(`Comedy, Romance, Horror`)} text='Genre' />
//                     <MenuOption onSelect={() => alert(`Navigation to My Saved`)} text='My Saved' />
//                     <MenuOption onSelect={() => alert(`Navigation to My Account Settings`)} text='My Account Settings' />
//                     <MenuOption onSelect={() => alert(`Log Out`)} text='Log Out' />
//                     {/* <MenuOption onSelect={() => alert(`Delete`)} >
//                     <Text style={{color: 'red'}}>Delete</Text>
//                     </MenuOption>
//                     <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' /> */}
//                 </MenuOptions>
//         </Menu>
//       </View>
//   )
// }