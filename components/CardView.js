import React from 'react';
import PropTypes from 'prop-types';
import {View, ImageBackground, Image, Text, Platform,StyleSheet} from 'react-native';
import defaultIcons from '../utils/Icons';
import FlipCard from 'react-native-flip-card-plus';

const BASE_SIZE = {width: 300, height: 190};
const addGaps = value => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = String(value).replace(/[^\d]/g, '');

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => !!group).join(' '),
  ); 
};

const propTypes = {
  focused: PropTypes.string,
  display: PropTypes.bool,
  brand: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  expiry: PropTypes.string,
  expiryTitle: PropTypes.string,
  cvc: PropTypes.string,
  placeholder: PropTypes.object,
  postalCode: PropTypes.string,
  onPressfunc: PropTypes.func,
  flipDirection: PropTypes.string,
  onLongPressfunc: PropTypes.func,
  scale: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  fontFamily: PropTypes.string,
  imageFront: PropTypes.number,
  imageBack: PropTypes.number,
  customIcons: PropTypes.object,
};

const defaultProps = {
  name: '',
  placeholder: {
    number: '•••• •••• •••• ••••',
    name: 'NAME',
    expiryTitle: 'MONTH/YEAR',
    expiry: '••/••',
    cvc: '•••',
    postalCode: 'BANK NAME',
  },

  scale: 1,
  fontFamily: Platform.select({ios: 'Courier', android: 'monospace'}),
  imageFront: require('../assets/card-front.png'),
  imageBack: require('../assets/card-back.png'),
  onPressfunc: () => {},
  flipDirection: 'h',
  onLongPressfunc: () => {},
  display: false,
};

const CardView = props => {
  const {
    focused,
    brand,
    name,
    number,
    expiryTitle,
    expiry,
    cvc,
    postalCode,
    customIcons,
    placeholder,
    imageFront,
    imageBack,
    scale,
    fontFamily,
    onPressfunc,
    flipDirection,
    onLongPressfunc,
    style,
    display,
  } = props;

  const Icons = {...defaultIcons, ...customIcons};
  const isAmex = brand === 'american-express';
  const shouldFlip = () => !isAmex && focused === 'cvc';

  const containerSize = {...BASE_SIZE, height: BASE_SIZE.height * scale};
  const transform = {
    transform: [{scale}, {translateY: (BASE_SIZE.height * (scale - 1)) / 2}],
  };

  const baseSyle = [styles.baseText, {fontFamily}];

  const isFocused = type => focused === type && styles.focused;

  return (
    <View style={[styles.cardContainer, containerSize, style]}>
      <FlipCard
        style={{borderWidth: 0}}
        flipHorizontal={flipDirection.toLowerCase() == 'h' ? true : false}
        flipVertical={flipDirection.toLowerCase() == 'v' ? true : false}
        friction={10}
        perspective={2000}
        pressable={true}
        pressableCustomFunc={true}
        onPressed={onPressfunc}
        longPressable={true}
        onLongPressed={onLongPressfunc}
        flip={shouldFlip()}>
        <ImageBackground
          style={[BASE_SIZE, styles.cardFace, transform]}
          source={imageFront}>
          <Image
            resizeMode={'contain'}
            style={[styles.icon]}
            source={Icons[brand]}
          />
          <Text
            style={[
              ...baseSyle,
              styles.postalCode,
              !number && styles.placeholder,
              isFocused('postalCode'),
            ]}>
            {!postalCode ? placeholder.postalCode : postalCode}
          </Text>
          <Text
            style={[
              ...baseSyle,
              styles.number,
              !number && styles.placeholder,
              isFocused('number'),
            ]}>
            {!number ? placeholder.number : display ? addGaps(number) : number}
          </Text>
          <Text
            style={[
              ...baseSyle,
              styles.name,
              !name && styles.placeholder,
              isFocused('name'),
            ]}
            numberOfLines={1}>
            {!name ? placeholder.name : name.toUpperCase()}
          </Text>
          <Text
            style={[
              styles.baseText,
              {fontFamily},
              styles.expiryLabel,
              !expiryTitle && styles.placeholder,
              focused === 'expiry' && styles.focused,
            ]}>
            {!expiryTitle ? placeholder.expiryTitle : expiryTitle.toUpperCase()}
          </Text>
          <Text
            style={[
              ...baseSyle,
              styles.expiry,
              !expiry && styles.placeholder,
              isFocused('expiry'),
            ]}>
            {!expiry ? placeholder.expiry : expiry}
          </Text>
          {isAmex && (
            <Text
              style={[
                ...baseSyle,
                styles.amexCVC,
                !cvc && styles.placeholder,
                isFocused('cvc'),
              ]}>
              {!cvc ? placeholder.cvc : cvc}
            </Text>
          )}
        </ImageBackground>
        <ImageBackground
          style={[BASE_SIZE, styles.cardFace, transform]}
          source={imageBack}>
          <Text
            style={[
              styles.baseText,
              styles.cvc,
              !cvc && styles.placeholder,
              isFocused('cvc'),
            ]}>
            {!cvc ? placeholder.cvc : cvc}
          </Text>
        </ImageBackground>
      </FlipCard>
    </View>
  );
};

CardView.defaultProps = defaultProps;
CardView.propTypes = propTypes;

export default CardView;

const styles = StyleSheet.create({
  cardContainer: {},
  cardFace: {},
  icon: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 60,
    height: 40,
  },
  baseText: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
  },
  placeholder: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  focused: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
  },
  number: {
    fontSize: 21,
    position: 'absolute',
    top: 95,
    left: 28,
  },
  name: {
    fontSize: 16,
    position: 'absolute',
    bottom: 20,
    left: 25,
    right: 100,
  },
  expiryLabel: {
    fontSize: 9,
    position: 'absolute',
    bottom: 40,
    left: 218,
  },
  expiry: {
    fontSize: 16,
    position: 'absolute',
    bottom: 20,
    left: 220,
  },
  amexCVC: {
    fontSize: 16,
    position: 'absolute',
    top: 73,
    right: 30,
  },
  cvc: {
    fontSize: 16,
    position: 'absolute',
    top: 80,
    right: 30,
  },
  postalCode: {
    fontSize: 16,
    position: 'absolute',
    top: 20,
    left: 30,
  },
});
