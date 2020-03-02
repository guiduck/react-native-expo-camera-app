import React from 'react';
import { Audio } from 'expo-av';
import { Camera } from 'expo-camera';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { useState, useEffect, useRef } from 'react';

import Toolbar from './Toolbar';

import * as ImagePicker from 'expo-image-picker';

import styles from './styles';

function CameraPage() {
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.Off);
  const cameraRef = useRef();

  const [captures, setCaptures] = useState([]);

  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    console.log('useEffect used');

    setFlashMode(flashMode);
    console.log(flashMode);

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

  //opens lybrary to select photos
  async function pickImage() {
    console.log('this is gallery');
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    console.log(result);
  }

  async function handdleCapture() {
    let photo = await cameraRef.current.takePictureAsync();
    setCaptures([...captures, photo]);
    console.log('snap!!');
  }

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
        <Camera ref={cameraRef} style={styles.prev} type={cameraType}></Camera>
      </View>
      <Toolbar
        flashMode={flashMode}
        cameraType={cameraType}
        setFlashMode={setFlashMode}
        setCameraType={setCameraType}
        onCapture={handdleCapture}
        pickImage={pickImage}
      />
    </>
  );
}

export default CameraPage;
