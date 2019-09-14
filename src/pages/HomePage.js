import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';


const styles = StyleSheet.create({
  webView: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

const HomePage = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <WebView
      source={{ uri: 'http://green-sur-mesure.lebowsky-dev.xyz/' }}
      style={styles.webView}
    />
  </SafeAreaView>

);
export default HomePage;
