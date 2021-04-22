import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { TextInput } from '../components/Form';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export const List = () => {
  const [name, setName] = React.useState('');

  return (
    <View style={styles.container}>
      <Text type="header">Welcome!</Text>
      <Text type="subheader">This is the subheader.</Text>
      <Text>This is body text.</Text>
      <TextInput
        label="Name"
        placeholder="Enter your name"
        onChangeText={text => setName(text)}
      />
      <Button onPress={() => alert(`Hi ${name}!`)}>Go!</Button>
    </View>
  );
};
