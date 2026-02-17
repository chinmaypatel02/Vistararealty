import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import LeadsScreen from '../screens/DashboardScreens/LeadsScreen';
import SalesScreen from '../screens/DashboardScreens/SalesScreen';
import HRScreen from '../screens/DashboardScreens/HRScreen';
import PayrollScreen from '../screens/DashboardScreens/PayrollScreen';
import ESSScreen from '../screens/DashboardScreens/ESSScreen';
import FinanceScreen from '../screens/DashboardScreens/FinanceScreen';
import AccountPayScreen from '../screens/DashboardScreens/AccountPayScreen';
import LabourScreen from '../screens/DashboardScreens/LabourScreen';
import AssetsScreen from '../screens/DashboardScreens/AssetsScreen';
import { COLORS } from '../constants/theme';

const { width } = Dimensions.get('window');

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={styles.drawerContainer}
    >
      {/* Drawer Header */}
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Modules</Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawer,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.white,
        drawerActiveBackgroundColor: 'rgba(255,255,255,0.15)',
        drawerLabelStyle: styles.drawerLabel,
        drawerItemStyle: styles.drawerItem,
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Admin',
          drawerIcon: () => <Text style={styles.icon}>⚙️</Text>,
        }}
      />
      <Drawer.Screen
        name="Leads"
        component={LeadsScreen}
        options={{
          drawerLabel: 'Leads',
          drawerIcon: () => <Text style={styles.icon}>🎯</Text>,
        }}
      />
      <Drawer.Screen
        name="Sales"
        component={SalesScreen}
        options={{
          drawerLabel: 'Sales',
          drawerIcon: () => <Text style={styles.icon}>💼</Text>,
        }}
      />
      <Drawer.Screen
        name="HR"
        component={HRScreen}
        options={{
          drawerLabel: 'HR',
          drawerIcon: () => <Text style={styles.icon}>👥</Text>,
        }}
      />
      <Drawer.Screen
        name="Payroll"
        component={PayrollScreen}
        options={{
          drawerLabel: 'Payroll',
          drawerIcon: () => <Text style={styles.icon}>💰</Text>,
        }}
      />
      <Drawer.Screen
        name="ESS"
        component={ESSScreen}
        options={{
          drawerLabel: 'ESS',
          drawerIcon: () => <Text style={styles.icon}>🤝</Text>,
        }}
      />
      <Drawer.Screen
        name="Finance"
        component={FinanceScreen}
        options={{
          drawerLabel: 'Finance',
          drawerIcon: () => <Text style={styles.icon}>📊</Text>,
        }}
      />
      <Drawer.Screen
        name="AccountPay"
        component={AccountPayScreen}
        options={{
          drawerLabel: 'Account Pay',
          drawerIcon: () => <Text style={styles.icon}>🟡</Text>,
        }}
      />
      <Drawer.Screen
        name="Labour"
        component={LabourScreen}
        options={{
          drawerLabel: 'Labour',
          drawerIcon: () => <Text style={styles.icon}>🦺</Text>,
        }}
      />
      <Drawer.Screen
        name="Assets"
        component={AssetsScreen}
        options={{
          drawerLabel: 'Assets',
          drawerIcon: () => <Text style={styles.icon}>🏗️</Text>,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#1B2B4B',
    width: width * 0.72,
  },
  drawerContainer: {
    backgroundColor: '#1B2B4B',
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.05,
    marginBottom: width * 0.02,
  },
  drawerTitle: {
    color: COLORS.white,
    fontSize: width * 0.055,
    fontWeight: 'bold',
  },
  closeIcon: {
    color: COLORS.white,
    fontSize: width * 0.055,
    fontWeight: 'bold',
  },
  drawerLabel: {
    fontSize: width * 0.042,
    fontWeight: '500',
    marginLeft: -width * 0.03,
  },
  drawerItem: {
    borderRadius: 8,
    marginVertical: width * 0.005,
  },
  icon: {
    fontSize: width * 0.055,
  },
});

export default DrawerNavigator;