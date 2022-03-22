import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Signin from './src/pages/Signin';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Signin />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
