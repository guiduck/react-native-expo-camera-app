import React from 'react';
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
    async function getPermissions() {
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);

      const cameraPermission =
        camera.status === 'granted' && audio.status === 'granted';

      setCameraPermission(cameraPermission);
      console.log('component did mount');
    }
    console.log('useEffect used');
    getPermissions();
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
        <Camera type={type}>
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
