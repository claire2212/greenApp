import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const AppRoutes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginPage} hideNavBar initial />
    <Scene key="home" component={HomePage} hideNavBar />
  </Scene>,
);

export default AppRoutes;
