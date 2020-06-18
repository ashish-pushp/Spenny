import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'
import { Provider } from 'react-redux'
import configureStore from './src/configureStore'
const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
