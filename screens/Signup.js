import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import InputBox from '../components/InputBox';
import FormButton from '../components/FormButton';
import {register} from '../store/AuthSlice';
//import {AuthContext} from '../navigation/AuthProvider';

const Signup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [passCheck, setpassCheck] = useState(false);
  const [confirmpassCheck, setconfirmCheck] = useState(false);
  const [emptyCheck, setEmptyCheck] = useState(false);
  // const [isAuthenticate, setIsAuthenticat] = useState(false);

  //const {register} = useContext(AuthContext);

  const userRegister = () => {
    try {
      if (email === '') {
        setEmailCheck(true);
        setpassCheck(false);
        setconfirmCheck(false);
        setEmptyCheck(false);
      } else if (password === '') {
        setEmailCheck(false);
        setpassCheck(true);
        setconfirmCheck(false);
        setEmptyCheck(false);
      } else if (confirmPassword === '') {
        setEmailCheck(false);
        setpassCheck(false);
        setconfirmCheck(true);
        setEmptyCheck(false);
      } else if (email === '' && password === '' && confirmPassword === '') {
        setEmailCheck(false);
        setpassCheck(false);
        setconfirmCheck(false);
        setEmptyCheck(true);
      } else {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User account created & signed in!');
            dispatch(register('user-register'));
            navigation.navigate('Login');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
            dispatch(register('error'));
            console.error(error);
          });
      }
    } catch (error) {
      console.error(error);
      dispatch(register('error'));
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/loan-image.png')} style={styles.logo} />

      <Text style={styles.text}>Create an account</Text>

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

      <InputBox
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <Text style={styles.alertText}>
        {emailCheck === true
          ? 'Please enter email'
          : passCheck === true
          ? 'Please enter password'
          : confirmpassCheck === true
          ? 'Please enter confirm password'
          : null}
      </Text>
      <Text style={styles.alertText}>
        {emptyCheck === true ? 'Enter Credentails' : null}
      </Text>
      <FormButton buttonTitle="Sign Up" onPress={userRegister} />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  alertText: {
    color: 'red',
  },
});
