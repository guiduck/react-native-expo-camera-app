import React, { useState } from 'react';
import {
  Stylesheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import styles from '../src/styles';
import { materialIcons, MaterialIcons } from '@expo/vector-icons';
import MailForm from './MailForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mails, setMails] = useState([]);

  //function to handle key and store mail
  const addMail = mail => {
    mail.key = Math.random().toString();
    setMails(currentMails => {
      return [mail, ...currentMails];
    });
    setModalOpen(false);
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
    </View>
  );
}
