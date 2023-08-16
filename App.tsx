/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/signInScreen';
function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'ghostwhite'}}>
      <SignInScreen />
    </SafeAreaView>
  );
}

export default App;
