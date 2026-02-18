import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Companyscreen from '../screens/Companyscreen/Homescreen';
import LoginScreen from '../screens/Loginscreen/Loginscreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Home" component={Companyscreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
           {/* <Stack.Screen name="Dashboard" component={DrawerNavigator} /> */}
        {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;