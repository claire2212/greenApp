import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import store from './redux/store';

import AppContainer from './components/common/AppContainer';
import CustomRouter from './utils/CustomRouter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppContainer>
            <CustomRouter />
          </AppContainer>
        </Root>
      </Provider>
    );
  }
};

export default App;
