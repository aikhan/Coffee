/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Container from './src/components/container';
import {Provider} from 'react-redux';
import configureStore from './src/store';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Container />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
