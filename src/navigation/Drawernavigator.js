import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const PlaceholderScreen = ({ route }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.name}</Text>
    <Text style={styles.subtitle}>Coming Soon</Text>
  </View>
);

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
        component={PlaceholderScreen}
        options={{ title: 'Projects', drawerLabel: 'Projects' }}
      />
      <Drawer.Screen
        name="Sites"
        component={PlaceholderScreen}
        options={{ title: 'Sites', drawerLabel: 'Sites' }}
      />
      <Drawer.Screen
        name="Contractors"
        component={PlaceholderScreen}
        options={{ title: 'Contractors', drawerLabel: 'Contractors' }}
      />
      <Drawer.Screen
        name="Purchase"
        component={PlaceholderScreen}
        options={{ title: 'Purchase Orders', drawerLabel: 'Purchase Orders' }}
      />
      <Drawer.Screen
        name="Inventory"
        component={PlaceholderScreen}
        options={{ title: 'Inventory', drawerLabel: 'Inventory' }}
      />
      <Drawer.Screen
        name="Payments"
        component={PlaceholderScreen}
        options={{ title: 'Payments', drawerLabel: 'Payments' }}
      />
      <Drawer.Screen
        name="Reports"
        component={PlaceholderScreen}
        options={{ title: 'Reports', drawerLabel: 'Reports' }}
      />
      <Drawer.Screen
        name="Clients"
        component={PlaceholderScreen}
        options={{ title: 'Clients', drawerLabel: 'Clients' }}
      />
      <Drawer.Screen
        name="Settings"
        component={PlaceholderScreen}
        options={{ title: 'Settings', drawerLabel: 'Settings' }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F2A44',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
});

export default DrawerNavigator;
