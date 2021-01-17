import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

const choice = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={styles.roundButton1}>
        <Text style={styles.paymentOption}>Premium Payment Plan</Text>
        <Text style={styles.paymentDescription}>
          This allows you to have more jobs available to you per month if you
          have errands that need to be run
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={styles.roundButton2}>
        <Text style={styles.paymentOption}>Basic Payment Plan</Text>
        <Text style={styles.paymentDescription}>
          This allows you to have more jobs available to you per month if you
          have errands that need to be run
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={styles.roundButton3}>
        <Text style={styles.paymentOption}>Pay per Job</Text>
        <Text style={styles.paymentDescription}>
          This allows you to have more jobs available to you per month if you
          have errands that need to be run
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default choice;

/// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: Dimensions.get('window').width - 60,
    height: 150,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#B0B4DC',
    margin: 30,
  },
  roundButton2: {
    width: Dimensions.get('window').width - 60,
    height: 150,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#B0B4DC',
    margin: 30,
  },
  roundButton3: {
    width: Dimensions.get('window').width - 60,
    height: 150,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#B0B4DC',
    margin: 30,
  },
  paymentOption: {
    paddingRight: 5,
    textAlign: 'left',
  },
});
