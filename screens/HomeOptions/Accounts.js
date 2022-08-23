import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ListItem, Chevron, Button} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Accounts = () => {
  const navigation = useNavigation();
  const [account, setAccount] = useState();

  useEffect(() => {
    getAccount()
      .then(response => {
        console.log('getAccount', response);
        setAccount(response);
      })
      .catch(error => {
        console.log('get Acc error', error);
      });
  });

  const getAccount = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Account');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('get Account err', e);
    }
  };

  return (
    <View style={styles.container}>
      {account !== undefined ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.loanContainer}>
            <View style={styles.bankInfo}>
              <Image
                source={{
                  uri: 'https://assets.stickpng.com/images/627cc46b1b2e263b45696a82.png',
                }}
                style={styles.logo}
              />
            </View>
            <View>
              <Text style={styles.text}>Axis Bank Limited </Text>
            </View>
          </View>
          <Text style={styles.accountText}>
            Customer Name : {account.PersonalDetails.FirstName}{' '}
            {account.PersonalDetails.LastName}
          </Text>
          <Text style={styles.accountText}>Account Type : Savings</Text>
          <Text style={styles.accountText}>Status : Active </Text>
          <Text style={styles.accountText}>
            Account Number : XXXXX XXXXX X2390
          </Text>
          <Text style={styles.accountText}>
            {' '}
            Branch : Sir Phirozshah Mehta Rd, Fort, Mumbai
          </Text>
          <Text style={styles.accountText}>IFSC Code : IRVTUS3N</Text>

          <Text style={styles.accountText}>Nominee : xyz</Text>
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.noAccountText}>Don't have account !</Text>

          <Button
            type="outline"
            buttonStyle={{
              borderRadius: 20,
              padding: 10,
              width: 160,
              margin: '5%',
              borderColor: 'purple',
              borderWidth: 1,
            }}
            onPress={() => navigation.navigate('CreateAccount')}
            color="error">
            <Text style={styles.createAccountText}> Add account</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  accountText: {
    marginBottom: '10%',
    fontSize: 15,
    color: 'black',
  },
  loanContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 2,
    marginBottom: 10,
  },
  logo: {
    height: 50,
    width: 80,
  },
  bankInfo: {
    margin: '5%',
  },
  text: {
    fontWeight: '400',
    fontSize: 20,
    color: 'black',
  },
  noAccountText: {
    fontSize: 20,
    color: 'black',
  },
  createAccountText: {
    color: 'purple',
  },
});
