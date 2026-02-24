import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import ProjectsScreen from '../screens/Drawerscreen/Projectscreen/Projectscreen';
import SitesScreen from '../screens/Drawerscreen/Sitescreen/Sitescreen';
import ContractorsScreen from '../screens/Drawerscreen/Contractorscreen/Contractorscreen';
import PurchaseScreen from '../screens/Drawerscreen/Purchasescreen/Purchasescreen';
import InventoryScreen from '../screens/Drawerscreen/Inventoryscreen/Inventoryscreen';
import PaymentScreen from '../screens/Drawerscreen/Paymentscreen/Paymentscreen';
import ReportScreen from '../screens/Drawerscreen/Reportscreen/Reportscreen';
import ClientScreen from '../screens/Drawerscreen/Clientscreen/Clientscreen';
import SettingScreen from '../screens/Drawerscreen/Settingscreen/Settingscreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#0F2A44' },
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#0F2A44',
          width: 280,
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#B0C4DE',
        drawerLabelStyle: { fontSize: 15, fontWeight: '500' },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{ title: 'StrategicERP', drawerLabel: 'Dashboard' }}
      />
      <Drawer.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ title: 'Projects', drawerLabel: 'Projects' }}
      />
      <Drawer.Screen
        name="Sites"
        component={SitesScreen}
        options={{ title: 'Sites', drawerLabel: 'Sites' }}
      />
      <Drawer.Screen
        name="Contractors"
        component={ContractorsScreen}
        options={{ title: 'Contractors', drawerLabel: 'Contractors' }}
      />
      <Drawer.Screen
        name="Purchase"
        component={PurchaseScreen}
        options={{ title: 'Purchase Orders', drawerLabel: 'Purchase Orders' }}
      />
      <Drawer.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{ title: 'Inventory', drawerLabel: 'Inventory' }}
      />
      <Drawer.Screen
        name="Payments"
        component={PaymentScreen}
        options={{ title: 'Payments', drawerLabel: 'Payments' }}
      />
      <Drawer.Screen
        name="Reports"
        component={ReportScreen}
        options={{ title: 'Reports', drawerLabel: 'Reports' }}
      />
      <Drawer.Screen
        name="Clients"
        component={ClientScreen}
        options={{ title: 'Clients', drawerLabel: 'Clients' }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{ title: 'Settings', drawerLabel: 'Settings' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
