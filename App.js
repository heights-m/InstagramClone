import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';


import { NavigationContainer } from '@react-navigation/native'; // both must be installed in terminal->app file
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing"> {/* Tells NavigationContainer the first route it should go to is LandingScreen*/}
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}