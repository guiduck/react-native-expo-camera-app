import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../src/styles';

export default function MailDetails({ navigation }) {
  const navHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {console.log('emptyness')}
      <Text>{navigation.getParam('name')}</Text>
      <Text>{navigation.getParam('email')}</Text>
      <Text>{navigation.getParam('message')}</Text>
      <Button title='back to Home screen' onPress={navHandler} />
    </View>
  );
}
