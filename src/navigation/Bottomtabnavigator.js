import React from 'react';
import { Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminScreen from '../screens/DashboardScreens/AdminScreen';
import ProjectsScreen from '../screens/DashboardScreens/ProjectsScreen';
import SitesScreen from '../screens/DashboardScreens/SitesScreen';
import ContractorsScreen from '../screens/DashboardScreens/ContractorsScreen';
import PurchaseScreen from '../screens/DashboardScreens/PurchaseScreen';
import { COLORS } from '../constants/theme';

const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          height: height * 0.08,
          paddingBottom: height * 0.01,
          paddingTop: height * 0.008,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontSize: width * 0.028,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: width * 0.06, color }}>⚙️</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: width * 0.06, color }}>🏗️</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Sites"
        component={SitesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: width * 0.06, color }}>📍</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Contractors"
        component={ContractorsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: width * 0.06, color }}>👷</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Purchase"
        component={PurchaseScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: width * 0.06, color }}>🛒</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;