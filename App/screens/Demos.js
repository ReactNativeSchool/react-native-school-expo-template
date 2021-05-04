import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../constants/colors';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { TextInput } from '../components/Form';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
});

export const TextDemo = () => (
  <View style={styles.container}>
    <Text type="header">This is a header</Text>
    <Text type="subheader">This is a subheader</Text>
    <Text>This is normal text</Text>
  </View>
);

export const FormDemo = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const submit = () => {
    const nextErrors = {};
    if (email.length === 0) {
      nextErrors.email = 'This field is required.';
    }
    if (password.length === 0) {
      nextErrors.password = 'This field is required.';
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return null;
    }

    alert(`Success! \n Email: ${email} \n Password: ${password}`);
    return null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email Address"
        placeholder="Enter your email..."
        value={email}
        onChangeText={text => setEmail(text)}
        errorText={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="Enter your password..."
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        errorText={errors.password}
        autoCapitalize="none"
      />
      <Button onPress={submit}>Sign In</Button>
    </View>
  );
};

export const ButtonDemo = () => (
  <View style={styles.container}>
    <Button onPress={() => alert('you pressed the default button')}>
      Default Button
    </Button>
    <Button outline onPress={() => alert('you pressed the outline button')}>
      Outline Button
    </Button>
  </View>
);
