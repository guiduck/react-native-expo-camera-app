import React, { useState } from 'react';
import {
  Stylesheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Button
} from 'react-native';
import styles from '../src/styles';
import { materialIcons, MaterialIcons } from '@expo/vector-icons';
import MailForm from './MailForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mails, setMails] = useState([
    { name: 'guiduck', email: 'gck02@gil.com', message: 'thi aisdap' },
    { name: 'vittis', email: 'bit1709@snjldslj', message: 'shit aidjasojdo' },
    { name: 'gugu', email: 'aosdnmsai@aodsioa', message: 'reverse osmosis bs' }
  ]);

  //function to handle key and store mail
  const addMail = mail => {
    mail.key = Math.random().toString();
    setMails(currentMails => {
      return [mail, ...currentMails];
    });
    setModalOpen(false);
  };

  const navHandler = () => {
    navigation.navigate('MailDetails');
  };

  return (
    //still didn't make styles.home
    <View style={styles.home}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <MailForm addMail={addMail} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <Text style={styles.titleText}> Home Screen </Text>
      <FlatList
        data={mails}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MailDetails', item)}
          >
            <Text style={styles.titleText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Button title='see mail details' onPress={navHandler} />
    </View>
  );
}
