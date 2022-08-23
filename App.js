import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './navigation/Routes';
import UserOnboarding from './screens/UserOnboarding';
import AuthStack from './navigation/AuthStack';
import {Provider} from 'react-redux';
import store from './store/store';
import LoanTabs from './navigation/LoanTab';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
