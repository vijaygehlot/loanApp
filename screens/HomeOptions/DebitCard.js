import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// You can import from local filess
import CardView from '../../components/CardView';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';
const USE_LITE_CREDIT_CARD_INPUT = false;
export default function DebitCard() {
  const _onChange = formData => {
    /* eslint no-console: 0 */
    console.log(JSON.stringify(formData, null, ' '));
  };

  const _onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <CardView
          number="4410235123791414"
          cvc="121"
          expiry="12/25"
          brand="visa"
          postalCode="Yes"
          name="John Smith"
          display={true}
          flipDirection="h"
          onPressfunc={() => alert('clicked')}
          onLongPressfunc={() => alert('Long clicked')}
        />
      </View>

{/***************Design for Add Debit Card */}

      {/* <View style={styles.container2}>
        <View style={styles.addCardContainer}>
          <Text style={styles.addCardTitle}>Add Debit Card</Text>
        </View>
        {USE_LITE_CREDIT_CARD_INPUT ? (
          <LiteCreditCardInput
            autoFocus
            inputStyle={styles.input}
            validColor={'black'}
            invalidColor={'red'}
            placeholderColor={'darkgray'}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        ) : (
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            requiresPostalCode
            labelStyle={styles.label}
            inputStyle={styles.input}
            validColor={'black'}
            invalidColor={'red'}
            placeholderColor={'darkgray'}
            onFocus={_onFocus}
            onChange={_onChange}
          />
        )}
      </View> */}


    </View>
  );
}
const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container2: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  label: {
    color: 'black',
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
  addCardContainer: {
    margin: '5%',
  },
  addCardTitle: {
    fontSize: 20,
    color: 'black',
  },
});
