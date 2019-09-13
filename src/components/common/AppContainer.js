import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StatusBar,
  View,
} from 'react-native';

class AppContainer extends Component {

  /**
   * Render function to display component.
   */
  render() {
    const {
      children,
    } = this.props;

    return (
      <View style={{
        position: 'relative',
        flexDirection: 'column',
        flex: 1,
      }}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent
        />
        {/* Main content */}
        { children }
      </View>
    );
  }
}


AppContainer.propTypes = {
  children: PropTypes.any,
};

AppContainer.defaultProps = {
  children: [],
};

export default AppContainer;
