import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Transections from '../screens/HomeOptions/Transections';
import Accounts from '../screens/HomeOptions/Accounts';
import DuePayment from '../screens/HomeOptions/DuePayment';
import DebitCard from '../screens/HomeOptions/DebitCard';
import MyLoans from '../screens/HomeOptions/MyLoans';
import Banks from '../screens/HomeOptions/Banks';
import Home from '../screens/Home';
import CreateAccount from '../screens/Forms/CreateAccount';

const HomeOptionStack = createStackNavigator();

const HomeOptionsStack = () => {
  return (
    <HomeOptionStack.Navigator>
      <HomeOptionStack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <HomeOptionStack.Screen
        name="Accounts"
        component={Accounts}
        options={{headerTitle: 'Account'}}
      />
      <HomeOptionStack.Screen
        name="Transections"
        component={Transections}
        options={{headerTitle: 'Transection History'}}
      />
      <HomeOptionStack.Screen
        name="DuePayment"
        component={DuePayment}
        options={{headerTitle: 'Due Payments '}}
      />
      <HomeOptionStack.Screen
        name="DebitCard"
        component={DebitCard}
        options={{headerTitle: 'Debit Card'}}
      />
      <HomeOptionStack.Screen
        name="MyLoans"
        component={MyLoans}
        options={{headerTitle: 'My Loans'}}
        // options={{header: () => null}}
      />

      <HomeOptionStack.Screen
        name="Banks"
        component={Banks}
        options={{headerTitle: 'Top Banks'}}
      />
      <HomeOptionStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerTitle: 'Create Bank Account'}}
      />
    </HomeOptionStack.Navigator>
  );
};

export default HomeOptionsStack;
