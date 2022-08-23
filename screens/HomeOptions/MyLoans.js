import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem, Chevron, Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {loanJson, activeLoanJson} from '../../data/loan-data';
const MyLoans = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [loanId, setLoanId] = useState('');
  const loanTypeExtend = id => {
    setLoanId(id);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.noLoanText}>You dont't get any loan yet !</Text>

        <Button
          type="outline"
          buttonStyle={{
            borderRadius: 20,
            padding: 10,
            width: 160,
            margin: '5%',
            borderColor: 'red',
            borderWidth: 1,
          }}
          onPress={() => navigation.navigate('Loan')}
          color="error">
          <Text style={styles.requestLoan}> Request for Loan</Text>
        </Button>
      </View>

      {/***************Design of When user have loans */}

      {/* <View>
        {activeLoanJson.map((loan, index) => (
          <ListItem.Accordion
            key={index}
            style={styles.list}
            content={
              <>
                <MaterialCommunityIcons
                  name={loan.icon}
                  color={loan.color}
                  style={{padding: 5}}
                  size={25}
                />
                <ListItem.Content>
                  <ListItem.Title style={styles.loanText}>
                    {loan.title}
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={loan.id === loanId ? expanded : null}
            onPress={() => loanTypeExtend(loan.id)}>
            <ListItem bottomDivider>
              <ListItem.Content>
                <View style={styles.loanContainer}>
                  <View>
                    <Text style={styles.text}>{loan.data[0].account}</Text>
                  </View>
                  <View>
                    <Text style={styles.text}>
                      {loan.data[0].amount}
                      <Text style={styles.debit}> {loan.data[0].type}</Text>
                    </Text>
                  </View>
                </View>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </ListItem.Accordion>
        ))}
      </View> */}
    </View>
  );
};

export default MyLoans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '4%',
  },
  list: {
    marginTop: '4%',
  },
  loanText: {
    fontWeight: '600',
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
  noLoanText: {
    fontSize: 20,
    color: 'black',
  },
  requestLoan: {
    color: 'red',
  },
});
