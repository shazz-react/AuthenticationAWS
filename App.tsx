/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'ghostwhite'}}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
