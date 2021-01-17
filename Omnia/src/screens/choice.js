import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

const choice = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text h1 style={styles.header}>
        Choose Your Errand Plan
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.roundButton1}>
        <Text style={styles.paymentOption}>Premium</Text>

        {/* List Elements for the different benefits */}

        <Unorderedlist>
          <Text style={styles.paymentDescription}>10 Errands Open</Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text style={styles.paymentDescription}>
            Priority Jobs Feature Open
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.paymentDescription}>
            Scheduled Errands Available
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.paymentDescription}>
            Unlimited Priority Errand Open
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.paymentDescription}>
            Fixed Payment For Any Errand
          </Text>

          <Text style={styles.price}>$</Text>
        </Unorderedlist>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.roundButton2}>
        <Text style={styles.paymentOption}>Standard</Text>

        <Unorderedlist>
          <Text style={styles.paymentDescription}>3 Jobs Available</Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text style={styles.paymentDescription}>Most Affordable Plan</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.paymentDescription}>
            Fixed Payment For Any Type Of Job
          </Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.paymentDescription}>1 Priority Job</Text>
        </Unorderedlist>
        <View style={styles.rightContainer}>
          <Text style={styles.price}>$</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.roundButton3}>
        <Text style={styles.paymentOption}>Pay per Job</Text>

        <Unorderedlist>
          <Text style={styles.paymentDescription}>Flexible Payment Plan</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.paymentDescription}>Pay Per Each Job Done</Text>
        </Unorderedlist>
        <Unorderedlist>
          <Text style={styles.paymentDescription}>Minimum 15$ Job Price</Text>
        </Unorderedlist>

        <View style={styles.rightContainer}>
          <Text style={{
    textAlign: 'right',
    justifyContent: 'center',
    fontSize: 30,
  }}>$ /Job </Text>
        </View>
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
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#B0B4DC',
    margin: 30,
  },
  roundButton2: {
    width: Dimensions.get('window').width - 60,
    height: 170,
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
    fontWeight: 'bold',
    fontSize: 17,
    padding: 4,
  },
  header: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paymentDescription: {
    padding: 1,
  },
  price: {
    textAlign: 'right',
    justifyContent: 'center',
    fontSize: 40,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});