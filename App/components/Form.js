import React from 'react';
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native';

import { Text } from './Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  labelText: {
    color: colors.gray,
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
  },
  border: {
    height: 1,
    backgroundColor: colors.border,
  },
});

export const TextInput = ({ label, messageType, ...rest }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.labelText}>{label}</Text>
    <RNTextInput style={styles.textInput} {...rest} />
    <View style={styles.border} />
  </View>
);
