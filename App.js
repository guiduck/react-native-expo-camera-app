import React from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import Navigator from './routes/HomeStack';

import CameraPage from './src/CameraPage';

export default function App() {
  //return <CameraPage />;
  //return <Home />;
  return <Navigator />;
}
