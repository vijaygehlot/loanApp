import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ListItem, Chevron, Header, Button} from '@rneui/themed';
import {loanJson, activeLoanJson} from '../data/loan-data';
import {ScrollView} from 'react-native-gesture-handler';
import MainHeader from '../components/Header';
const MyLoans = () => {
  const [expanded, setExpanded] = useState(false);
  const [loanId, setLoanId] = useState('');
  const loanTypeExtend = id => {
    setLoanId(id);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <MainHeader />
      </View>
      <View style={styles.container}>
        <ScrollView>
          {loanJson.map((loan, index) => (
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
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignContent: 'center',
                      paddingLeft: '12%',
                    }}>
                    <Text style={{fontWeight:'600',color:'black'}}>{loan.data}</Text>
                    <Button
                      buttonStyle={{margin: '5%'}}
                      //onPress={() => navigation.navigate('CreateAccount')}
                      color="error">
                      Request for Loan
                    </Button>
                  </View>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </ListItem.Accordion>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MyLoans;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
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
});
