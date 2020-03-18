import React, { useState } from 'react';
import { Stylesheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from '../src/styles';
import { materialIcons, MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    //still didn't make styles.home
    <View style={styles.home}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />

          <Text> Hello hai hai</Text>
        </View>
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
