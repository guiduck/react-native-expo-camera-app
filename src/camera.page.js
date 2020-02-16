import React from 'react';
import { Camera } from 'expo-camera';
import { View, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect } from 'react';

import styles from './styles';

function CameraPage() {
  camera = null;

  const [cameraPermission, setCameraPermission] = useState();

  useEffect(() => {
    async function componentDidMount() {
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);

      const cameraPermission =
        camera.status === 'granted' && audio.status === 'granted';

      setCameraPermission({ cameraPermission });
    }
  }, []);

  if (cameraPermission === null) {
    return <View />;
  } else if (cameraPermission === false) {
    return <Text> Access to camera has been denied.</Text>;
  }

  return (
    <View>
      <Camera style={styles.preview} ref={camera => (this.camera = camera)} />
    </View>
  );
}

export default CameraPage;
