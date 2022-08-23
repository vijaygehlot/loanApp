import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem, Chevron, Button} from '@rneui/themed';
import {bankList} from '../../data/loan-data';
import {ScrollView} from 'react-native-gesture-handler';
const Banks = () => {
  const [expanded, setExpanded] = useState(false);
  const [loanId, setLoanId] = useState('');
  const loanTypeExtend = id => {
    setLoanId(id);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {bankList.map(bank => (
          <ListItem bottomDivider key={bank.id} style={styles.listItem}>
            <ListItem.Content>
              <View style={styles.loanContainer}>
                <View style={styles.logoContainer}>
                  <Image source={{uri: bank.image}} style={styles.bankLogo} />
                </View>
                <View style={styles.nameContainer}>
                  <Text style={styles.bankNameText}>{bank.name}</Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

export default Banks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '2%',
  },
  list: {
    marginTop: '4%',
  },
  loanText: {
    fontWeight: '900',
    padding: 5,
    fontSize: 20,
    marginTop: 20,
  },
  loanContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  debit: {
    color: 'red',
  },
  text: {
    color: 'black',
  },
  gridIncon: {
    padding: 5,
    height: 50,
    width: 50,
  },
  applyButton: {
    width: '80%',
    margin: '10%',
  },
  logoContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nameContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bankLogo: {
    height: 30,
    width: 30,
  },
  listItem: {
    margin: '1%',
  },
  bankNameText: {
    color: 'black',
    fontSize: 15,
  },
});
