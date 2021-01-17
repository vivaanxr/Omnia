import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home.js';
import Job from './src/screens/Job.js';
import LoginScreen from './src/screens/LoginScreen/LoginScreen.js';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen.js';
import SettingsPage from './src/screens/SettingsPage.js';
import Choice from './src/screens/choice.js';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 40, resizeMode: 'contain'}}
      source={require('./assets/OmniaLogoWhite.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
        <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
        <Stack.Screen
        name="Choice"
        component={Choice}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            height: 120,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            height: 120,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Job"
        component={Job}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            height: 120,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
