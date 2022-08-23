import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Loan from '../screens/Loan';
import Profile from '../screens/Profile';
import HomeOptionsStack from './HomeOptionStack';

const Tab = createMaterialBottomTabNavigator();

export default function LoanTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        activeColor="#3e2465"
        barStyle={{backgroundColor: 'white'}}
        initialRouteName="Home"
        labelStyle={{fontSize: 12}}>
        <Tab.Screen
          activeColor="##f0edf6"
          //inactiveColor="#3e2465"
          name="HomeOptionsStack"
          component={HomeOptionsStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="home-account"
                color={color}
                size={25}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Search"
          component={Search}
          activeColor="#f0edf6"
          //inactiveColor="#3e2465"
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="magnify" color={color} size={25} />
            ),
          }}
        /> */}
        <Tab.Screen
          options={{
            tabBarLabel: 'Loan',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account-cash"
                color={color}
                size={25}
              />
            ),
          }}
          name="Loan"
          component={Loan}
          activeColor="#f0edf6"
          //inactiveColor="#3e2465"
        />
        <Tab.Screen
          activeColor="#f0edf6"
          //inactiveColor="#3e2465"
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="badge-account-horizontal-outline"
                color={color}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
