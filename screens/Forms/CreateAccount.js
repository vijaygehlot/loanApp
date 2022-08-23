import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CreateAccount = () => {
  const navigation = useNavigation();
  const [fname, setFname] = React.useState('');
  const [lname, setLname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [idType, setIdType] = React.useState('');
  const [idNumber, setIdNumber] = React.useState('');
  const [idState, setIdState] = React.useState('');
  const [accType, setAccType] = React.useState('');
  const [aadhar, setAadhar] = React.useState('');
  const [nominee, setNominee] = React.useState('');
  const [pan, setPan] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [state, setState] = React.useState('');
  const [zipcode, setZipcode] = React.useState('');
  const [apartment, setApartment] = React.useState('');

  const submitAccount = async () => {
    try {
      let SubmitData = {
        PersonalDetails: {
          FirstName: fname,
          LastName: lname,
          EmailAddress: email,
          PhoneNumber: mobile,
          DateOfBirth: '10031982',
        },
        Address: {
          StreetAddress: street,
          ApartmentNumber: apartment,
          ZipCode: zipcode,
          State: state,
        },
        Identification: {
          ResidentialProof: idType,
          ResidentialProofID: '1',
          IdNumber: idNumber,
          IdState: idState,
        },
      };
      const jsonValue = JSON.stringify(SubmitData);
      await AsyncStorage.setItem('@Account', jsonValue);
      navigation.navigate('Accounts');
    } catch (e) {
      console.log('Submit Error', e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <TextInput
            label="First Name"
            value={fname}
            mode="outlined"
            onChangeText={text => setFname(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Last Name"
            value={lname}
            mode="outlined"
            onChangeText={text => setLname(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Mobile"
            keyboardType="numeric"
            value={mobile}
            mode="outlined"
            onChangeText={text => setMobile(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={{fontSize: 17, color: 'black'}}>Documents</Text>
          <RadioButton.Group
            onValueChange={value => setIdType(value)}
            value={idType}>
            <RadioButton.Item label="Driver licence" value="Driver licence" />
            <RadioButton.Item label="Non-driver" value="Non-driver" />
            <RadioButton.Item label="US military" value="US military" />
            <RadioButton.Item label="US Passport" value="US Passport" />
          </RadioButton.Group>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="ID Number"
            value={idNumber}
            mode="outlined"
            onChangeText={text => setIdNumber(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="ID state"
            value={idState}
            mode="outlined"
            onChangeText={text => setIdState(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Account Type"
            value={accType}
            mode="outlined"
            onChangeText={text => setAccType(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Nominee"
            value={nominee}
            mode="outlined"
            onChangeText={text => setNominee(text)}
          />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            label="Aadhar"
            value={aadhar}
            mode="outlined"
            onChangeText={text => setAadhar(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="PAN"
            value={pan}
            mode="outlined"
            onChangeText={text => setPan(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Apartment"
            keyboardType="numeric"
            value={apartment}
            mode="outlined"
            onChangeText={text => setApartment(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Street"
            value={street}
            mode="outlined"
            onChangeText={text => setStreet(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="State"
            value={state}
            mode="outlined"
            onChangeText={text => setState(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Zipcode"
            value={zipcode}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setZipcode(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <Button onPress={submitAccount}>Submit</Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  formContainer: {
    marginBottom: '2%',
  },
});
