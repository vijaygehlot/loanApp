import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {pendingJson} from '../../data/home-data';
import {ListItem} from '@rneui/base';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DuePayment = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {pendingJson.map(transection => (
          <ListItem key={transection.id} bottomDivider style={styles.listItem}>
            <ListItem.Content>
              <View style={styles.loanContainer}>
                <View>
                  <Text style={styles.text}>{transection.account}</Text>
                  <Text style={styles.loanName}>{transection.loan}
                  <Text style={styles.loanAmountText}>{transection.loan_amount}</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.amountText}>
                    {transection.amount}
                    <Text>
                      {' '}
                      <MaterialCommunityIcons
                        color="orange"
                        name="alert-circle"
                        size={17}
                      />
                    </Text>
                  </Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

export default DuePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '2%',
  },
  loanContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'gray',
  },
  amountText: {
    color: 'black',
  },
  listItem: {
    margin: '1%',
  },
  loanName: {
    fontWeight: '600',
    color: 'black',
    fontSize: 12,
  },
  loanAmountText:{
    fontWeight: '400',
    color: 'black',
    fontSize: 12,
  }
});
