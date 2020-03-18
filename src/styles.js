import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  preview: {
    height: winHeight,
    width: winWidth,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  prev: {
    flex: 1
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topToolbar: {
    width: winWidth,
    position: 'absolute',
    height: 100,
    top: 0
  },
  bottomToolbar: {
    width: winWidth,
    position: 'absolute',
    height: 100,
    bottom: 0
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: '#FFFFFF'
  },
  captureBtnActive: {
    width: 80,
    height: 80
  },
  captureBtnInternal: {
    width: 76,
    height: 76,
    borderWidth: 2,
    borderRadius: 76,
    backgroundColor: 'red',
    borderColor: 'transparent'
  },
  cameraTitle: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  cameraSwitch: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 40
  },
  cameraSwitchText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  gallery: {
    flex: 1,
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    marginLeft: 50,
    margin: 20
  },
  galleryText: {
    color: '#fff',
    fontSize: 40
  },
  modalContent: {
    flex: 1
  },
  modalToggle: {
    marginTop: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    fontSize: 18,
    borderRadius: 6
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    alignSelf: 'flex-start'
  }
});
