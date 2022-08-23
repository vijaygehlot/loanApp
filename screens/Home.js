import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainHeader from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {homeJson} from '../data/home-data';
import { signout } from '../store/AuthSlice';
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {});
const logout = ()=>{
  
}
  const getInfo = value => {
    if (value === 'account') {
      navigation.navigate('Accounts');
    } else if (value === 'transection-history') {
      navigation.navigate('Transections');
    } else if (value === 'due-payment') {
      navigation.navigate('DuePayment');
    } else if (value === 'debit-card') {
      navigation.navigate('DebitCard');
    } else if (value === 'my-loan') {
      navigation.navigate('MyLoans');
    } else {
      navigation.navigate('Banks');
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <MainHeader/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.parent]}>
            {homeJson.map((item, index) => (
              <View
                onStartShouldSetResponder={() => getInfo(item.value)}
                key={index}
                style={[styles.child, {backgroundColor: '#fff'}]}>
                <Image style={styles.gridIncon} source={item.url} />

                <Text style={styles.titleText}>{item.title}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5%',
  },
  child: {
    width: '45%',
    height: '50%',
    margin: '2.5%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#00bfff',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
    padding: '5%',
  },
  gridIncon: {
    height: 100,
    width: 100,
  },
});
