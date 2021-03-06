import React from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import styles from './styles';

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

function Toolbar({
  cameraType = CameraTypes.back,
  flashMode = CameraFlashModes.off,
  setFlashMode,
  setCameraType,
  onCapture,
  pickImage
}) {
  return (
    <>
      <Grid style={styles.topToolbar}>
        <Row>
          <Col style={styles.gallery}>
            <TouchableOpacity onPress={pickImage}>
              <Ionicons name='ios-photos' style={{ color: '#fff' }} size={30} />
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
      <Grid style={styles.bottomToolbar}>
        <Row>
          <Col style={styles.alignCenter}>
            <TouchableOpacity
              onPress={() =>
                setFlashMode(
                  flashMode === CameraFlashModes.on
                    ? CameraFlashModes.off
                    : CameraFlashModes.on
                )
              }
            >
              <Ionicons
                name={
                  flashMode == CameraFlashModes.on ? 'md-flash' : 'md-flash-off'
                }
                color='white'
                size={30}
              />
            </TouchableOpacity>
          </Col>
          <Col size={2} style={styles.alignCenter}>
            <TouchableWithoutFeedback onPress={onCapture}>
              <View style={[styles.captureBtn, styles.captureBtnActive]}>
                {<View style={styles.captureBtnInternal} />}
              </View>
            </TouchableWithoutFeedback>
          </Col>
          <Col style={styles.alignCenter}>
            <TouchableOpacity
              onPress={() =>
                setCameraType(
                  cameraType === CameraTypes.back
                    ? CameraTypes.front
                    : CameraTypes.back
                )
              }
            >
              <Ionicons name='md-reverse-camera' color='white' size={30} />
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default Toolbar;
