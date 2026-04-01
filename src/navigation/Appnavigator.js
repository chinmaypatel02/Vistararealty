import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Companyscreen from '../screens/Companyscreen/Homescreen';
import LoginScreen from '../screens/Loginscreen/Loginscreen';
import BottomTabNavigator from './BottomTabNavigator';
import SignInInternalScreen from '../screens/Dashboardscreen/Homescreen/SignInInternalscreen/SignInInternalScreen';

// Module screens
import AdminScreen from '../screens/Dashboardscreen/Adminscreen/Adminscreen';
import ProjectsScreen from '../screens/Dashboardscreen/Projectscreen/Projectscreen';
import SitesScreen from '../screens/Dashboardscreen/Sitescreen/Sitescreen';
import ContractorsScreen from '../screens/Dashboardscreen/Contractorscreen/Contractorscreen';
import PurchaseScreen from '../screens/Dashboardscreen/Purchasescreen/Purchasescreen';
import InventoryScreen from '../screens/Drawerscreen/Inventoryscreen/Inventoryscreen';
import PaymentsScreen from '../screens/Drawerscreen/Paymentscreen/Paymentscreen';
import ReportsScreen from '../screens/Drawerscreen/Reportscreen/Reportscreen';
import ClientsScreen from '../screens/Drawerscreen/Clientscreen/Clientscreen';
import SettingsScreen from '../screens/Drawerscreen/Settingscreen/Settingscreen';

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
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
        <Stack.Screen name="SignIn" component={SignInInternalScreen} />

        {/* Module screens navigated from ModulesScreen */}
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Sites" component={SitesScreen} />
        <Stack.Screen name="Contractors" component={ContractorsScreen} />
        <Stack.Screen name="Purchase" component={PurchaseScreen} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="Payments" component={PaymentsScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="Clients" component={ClientsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
