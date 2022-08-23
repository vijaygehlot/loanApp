import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ListItem, Chevron, Button} from '@rneui/themed';
import {userJson} from '../data/user-data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerA}>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: 'https://st2.depositphotos.com/3557671/11164/v/950/depositphotos_111644880-stock-illustration-man-avatar-icon-of-vector.jpg',
              }}
              style={styles.logo}
            />
            <Text style={styles.profileName}>{userJson.name}</Text>
            <Button
              type="outline"
              size="md"
              buttonStyle={{borderRadius: 20, width: 150}}
              //onPress={() => Linking.openURL(loan.weblink)}
              color="error">
              Edit Profile
            </Button>
          </View>
        </View>
        <View style={styles.containerB}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <View style={styles.profileContainer}>
                <View>
                
                  <Text style={styles.text}>Mobile:</Text>
                </View>
                <View>
                  <Text>{userJson.mobile}</Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <View style={styles.profileContainer}>
                <View>
                  <Text style={styles.text}>Email:</Text>
                </View>
                <View>
                  <Text>{userJson.email}</Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <View style={styles.profileContainer}>
                <View>
                  <Text style={styles.text}>Aadhar Number:</Text>
                </View>
                <View>
                  <Text>{userJson.aadhar}</Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <View style={styles.profileContainer}>
                <View>
                  <Text style={styles.text}>PAN</Text>
                </View>
                <View>
                  <Text>{userJson.pan}</Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <View style={styles.profileContainer}>
                <View>
                  <Text style={styles.text}>Address:</Text>
                </View>
                <View>
                  <Text>{userJson.address}</Text>
                </View>
              </View>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    backgroundColor: '#fff',
  },
  containerA: {
    flex: 2,

    marginTop: '20%',
  },
  containerB: {
    flex: 3,
    margin: '2%',
    //backgroundColor: 'green',
  },
  logo: {
    height: 100,
    width: 100,
  },
  profileCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  profileName: {
    fontSize: 15,
    padding: '5%',
  },
  profileContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text:{
    color:'black'
  }
});
