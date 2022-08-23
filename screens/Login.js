import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import InputBox from '../components/InputBox';
import FormButton from '../components/FormButton';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import {signin} from '../store/AuthSlice';
//import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [passCheck, setpassCheck] = useState(false);
  const [emptyCheck, setEmptyCheck] = useState(false);

  //const {login, googleLogin, fbLogin} = useContext(AuthContext);
  const userLogin = () => {
    if (email === '') {
      setEmailCheck(true);
      setpassCheck(false);
      setEmptyCheck(false);
    } else if (password === '') {
      setEmailCheck(false);
      setpassCheck(true);
      setEmptyCheck(false);
    } else if (email === '' && password === '') {
      setEmptyCheck(true);
      setEmailCheck(false);
      setpassCheck(false);
    } else {
      setEmptyCheck(false);
      setEmailCheck(false);
      setpassCheck(false);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('SUCCESS');

          dispatch(signin('user-login'));
        })
        .catch(error => {
          console.log('got error');
          dispatch(signin('error'));
        });
    }
  };
  console.log('emptyCheck', emptyCheck, email, password);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/loan-image.png')} style={styles.logo} />
      <Text style={styles.text}>Shyft Loan</Text>

      <InputBox
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <InputBox
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <Text style={styles.alertText}>
        {emailCheck === true
          ? 'Please enter email'
          : passCheck === true
          ? 'Please enter password'
          : null}
      </Text>
      <Text style={styles.alertText}>
        {emptyCheck === true ? 'Enter Credentails' : null}
      </Text>
      <FormButton buttonTitle="Sign In" onPress={userLogin} />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 20,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  alertText: {
    color: 'red',
  },
});
