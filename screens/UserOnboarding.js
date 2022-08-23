import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const UserOnboarding = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#fec044',
            image: <Image style={{height:150,width:150}} source={require('../assets/loan-image.png')} />,
            title: 'Connect to the Shyft Loan',
            subtitle: 'A New Way To Connect With The Finance World',
          },
          {
            backgroundColor: '#5d9ef6',
            image: <Image style={{height:150,width:150}} source={require('../assets/bank-s.png')} />,
            title: 'Option for Choose Top Banks',
            subtitle: 'select any banks to get Loan',
          },
          {
            backgroundColor: '#78e759',
            image: <Image style={{height:150,width:150}} source={require('../assets/interest-rate.png')} />,
            title: 'Lowest Interest Rate',
            subtitle: "Get the all loans with minimum % rates",
          },
        ]}
      />
    );
};

export default UserOnboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});