import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import LoginPage from '../pages/LoginPage';

const AppRoutes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginPage} hideNavBar initial />
  </Scene>,
);

export default AppRoutes;
