import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: 16,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 32,
    marginBottom: 12,
  },
  subHeaderText: {
    color: colors.gray,
    fontSize: 20,
    marginBottom: 12,
    marginTop: -12, // assum this shows up under a headerText
  },
});

export const Text = ({ type, children, style = {} }) => {
  let textStyles = [styles.text];

  if (type === 'header') {
    textStyles.push(styles.headerText);
  } else if (type === 'subheader') {
    textStyles.push(styles.subHeaderText);
  }

  if (Array.isArray(style)) {
    textStyles = [...textStyles, ...style];
  } else {
    textStyles.push(style);
  }

  return <RNText style={textStyles}>{children}</RNText>;
};
