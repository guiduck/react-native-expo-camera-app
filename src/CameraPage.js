import React from 'react';
import { Audio } from 'expo-av';
import { Camera } from 'expo-camera';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { useState, useEffect, useRef } from 'react';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

import styles from './styles';

function CameraPage() {
  const cameraRef = useRef();

  const [cameraPermission, setCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    console.log('useEffect used');

    (async () => {
      console.log('b4 cameraStatus');
      //const { cameraStatus } = await Permissions.askAsync(Permissions.CAMERA);
      const cameraStatus = await Camera.requestPermissionsAsync();
      const audio = await Audio.requestPermissionsAsync();
      const cameraRollStatus = await Permissions.askAsync(
        Permissions.CAMERA_ROLL
      );
      //const { audioStatus } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      //const { status } = await getPermissionsAsync();
      console.log(cameraRollStatus.status);
      console.log(cameraStatus.status);
      console.log(audio.status);
      //console.log(cameraStatus);
      //const cameraPermission =
      setCameraPermission(
        cameraStatus.status === 'granted' &&
          audio.status === 'granted' &&
          cameraRollStatus.status === 'granted'
      );
      console.log(cameraPermission);
      //setCameraPermission(cameraPermission);
      if (cameraPermission) {
        console.log('permission was set');
      }
    })();
  }, []);

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
    }
  };

  if (cameraPermission === null) {
    return <View />;
  }
  if (cameraPermission === false) {
    return <Text> Access to camera has been denied.</Text>;
  }

  return (
    <>
      {console.log('entered return')}
      <View style={{ flex: 1 }}>
        <Camera ref={cameraRef} style={styles.preview} type={type}>
          <View style={styles.cameraView}>
            <TouchableOpacity style={styles.cameraTitle}>
              <FontAwesome name='camera' />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cameraSwitch}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <MaterialCommunityIcons
                name='camera-switch'
                style={styles.cameraSwitch}
              />
              <Text style={styles.cameraSwitchText}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </>
  );
}

export default CameraPage;
