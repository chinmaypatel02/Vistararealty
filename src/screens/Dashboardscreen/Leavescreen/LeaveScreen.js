import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import BalanceScreen from './BalanceScreen/BalanceScreen';
import HistoryScreen from './HistoryScreen/HistoryScreen';
import { COLORS } from '../../../constants/theme';
import styles from './styles';

const { width } = Dimensions.get('window');

const renderScene = SceneMap({
  balance: BalanceScreen,
  history: HistoryScreen,
});

const ROUTES = [
  { key: 'balance', title: 'Balance' },
  { key: 'history', title: 'History' },
];

const CustomTabBar = ({ navigationState, onTabPress }) => (
  <View style={styles.tabBar}>
    {navigationState.routes.map((route, index) => {
      const isActive = navigationState.index === index;
      return (
        <TouchableOpacity
          key={route.key}
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => onTabPress(index)}
        >
          <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
            {route.title}
          </Text>
          {isActive && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
      );
    })}
  </View>
);

const LeaveScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leave</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Tab View with custom tab bar */}
      <TabView
        navigationState={{ index, routes: ROUTES }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        renderTabBar={(props) => (
          <CustomTabBar
            navigationState={props.navigationState}
            onTabPress={setIndex}
          />
        )}
        style={styles.content}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.85}
        onPress={() => {}}
      >
        <Icon name="add" size={28} color={COLORS.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LeaveScreen;
