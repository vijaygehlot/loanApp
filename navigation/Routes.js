import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import LoanTabs from './LoanTab';
import AuthStack from './AuthStack';
import store from '../store/store';
const Routes = () => {
  const userAuthState = useSelector(state => state.auth);
  console.log('userAuthState', userAuthState);
  return (
    <>
      {userAuthState !== undefined &&
      userAuthState.authState !== undefined &&
      userAuthState.authState === 'user-login' ? (
        <LoanTabs />
      ) : userAuthState !== undefined &&
        userAuthState.authState !== undefined &&
        userAuthState.authState === 'user-logout' ? (
        <AuthStack />
      ) : (
        <AuthStack />
      )}
    </>
  );
};

export default Routes;

const styles = StyleSheet.create({});
