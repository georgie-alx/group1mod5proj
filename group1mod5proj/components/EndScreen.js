import React from 'react';
import { View, Text } from 'react-native';

const EndScreen = ({ route }) => {
  const { message } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
    </View>
  );
};

export default EndScreen;
