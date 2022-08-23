import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Header} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../store/AuthSlice';
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const MainHeader = () => {
  const dispatch = useDispatch();
  const userLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        dispatch(signout('user-logout'));
      })
      .catch(error => {
        console.log('signout', error);
        dispatch(signout('error'));
      });
  };

  return (
    <Header
      leftComponent={
        <Image
          source={require('../assets/loan-image.png')}
          style={styles.logo}
        />
      }
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity style={{marginLeft: 10}} onPress={userLogout}>
            <MaterialCommunityIcons name="logout" size={26} color="white" />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{text: 'Shyft Loan', style: styles.heading}}
    />
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 22,
    // fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  logo: {
    height: 30,
    width: 30,
  },
});
