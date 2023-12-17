import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthFlow = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen
     name="Signup" 
     component={SignupScreen}
     options={{ title:''}}
     />
    <Stack.Screen name="Signin" component={SigninScreen} />
  </Stack.Navigator>
);

const TrackListFlow = ({ navigation }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen  
    name="trackList" 
    component={TrackListScreen} 
    options={{ title:''}}
    />
    <Stack.Screen  name="trackDetail" component={TrackDetailScreen} />
  </Stack.Navigator>
);

const MainFlow = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="trackListFlow"
      component={TrackListFlow}
      // options={{ title: 'TrackList' }}
    />
    <Tab.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
      // options={{ title: 'Create Track' }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      // options={{ title: 'Account' }}
    />
  </Tab.Navigator>
);

const App = () => (
  <AuthProvider>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={AuthFlow} />
      <Stack.Screen name="mainFlow" component={MainFlow} />
    </Stack.Navigator>
  </NavigationContainer>
  </AuthProvider>
);

export default App;
