import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthFlow = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name='ResolveAuth' component={ResolveAuthScreen}/>
    <Stack.Screen
     name="Signup" 
     component={SignupScreen}
    //  options={{ title:''}}
     />
    <Stack.Screen name="Signin" component={SigninScreen} />
  </Stack.Navigator>
);

const TrackListFlow = () => (
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
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'trackListFlow') {
          iconName = 'format-list-bulleted'; // Change this to the desired icon name
        } else if (route.name === 'TrackCreate') {
          iconName = 'plus-circle'; // Change this to the desired icon name
        } else if (route.name === 'Account') {
          iconName = 'account'; // Change this to the desired icon name
        }

        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="trackListFlow" component={TrackListFlow} />
    <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);
// const MainFlow = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="trackListFlow"
//       component={TrackListFlow}
//       // options={{ title: 'TrackList' }}
//     />
//     <Tab.Screen
//       name="TrackCreate"
//       component={TrackCreateScreen}
//       // options={{ title: 'Create Track' }}
//     />
//     <Tab.Screen
//       name="Account"
//       component={AccountScreen}
//       // options={{ title: 'Account' }}
//     />
//   </Tab.Navigator>
// );

const App = () => {
  const navigatorRef = React.useRef();

  const onReady = () => {
    setNavigator(navigatorRef.current);
  };

  return (
    <NavigationContainer ref={navigatorRef} onReady={onReady}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Account" component={AuthFlow} />
        <Stack.Screen name="mainFlow" component={MainFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ()=>{
  return (
    
    <LocationProvider>
      <TrackProvider>
        <AuthProvider>

            <App ref={(navigator)=>{ setNavigator(navigator)}}/>
        </AuthProvider>
      </TrackProvider>
    </LocationProvider>
    
    
    );
}