import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {transectionHistory} from '../../data/loan-data';
import {ListItem} from '@rneui/base';
import {ScrollView} from 'react-native-gesture-handler';
const Transections = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {transectionHistory.map(transection => (
          <ListItem bottomDivider key={transection.id} style={styles.listItem}>
            <ListItem.Content>
              <View style={styles.loanContainer}>
                <View>
                  <Text style={styles.date}>{transection.time}</Text>
                  <Text style={styles.text}>{transection.account}</Text>
                </View>
                <View>
                  <Text style={styles.amountText}>
                    {transection.amount}
                    <Text
                      style={{
                        color: transection.type === 'Cr' ? 'green' : 'red',
                      }}>
                      {' '}
                      {transection.type}
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

export default Transections;

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
  date: {
    fontWeight: '600',
    color: 'black',
    fontSize: 15,
  },
});
