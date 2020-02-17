import React from 'react';
import { Audio } from 'expo-av';
import { Camera } from 'expo-camera';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { useState, useEffect } from 'react';

//get window dimensions for styling
const { width: winWidth, height: winHeight } = Dimensions.get('window');

function CameraPage() {
  //camera = null;

  const [cameraPermission, setCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    console.log('useEffect used');

    (async () => {
      console.log('b4 cameraStatus');
      //const { cameraStatus } = await Permissions.askAsync(Permissions.CAMERA);
      const cameraStatus = await Camera.requestPermissionsAsync();
      const audio = await Audio.requestPermissionsAsync();
      //const { audioStatus } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      //const { status } = await getPermissionsAsync();
      console.log(cameraStatus.status);
      console.log(audio.status);
      //console.log(cameraStatus);
      //const cameraPermission =
      setCameraPermission(
        cameraStatus.status === 'granted' && audio.status === 'granted'
      );
      console.log(cameraPermission);
      //setCameraPermission(cameraPermission);
      if (cameraPermission) {
        console.log('permission was set');
      }
    })();
  }, []);

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
        <Camera style={styles.preview} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity
              style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {' '}
                Flip{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  preview: {
    height: winHeight,
    width: winWidth,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
});

export default CameraPage;
