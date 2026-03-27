import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReactNativeBiometrics from 'react-native-biometrics';
import styles from './styles';

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getWeekDates = () => {
  const today = new Date();
  const day = today.getDay(); // 0=Sun
  const monday = new Date(today);
  monday.setDate(today.getDate() - (day === 0 ? 6 : day - 1));
  return WEEK_DAYS.map((label, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return {
      label,
      date: d.getDate(),
      month: d.toLocaleString('en', { month: 'short' }).toUpperCase(),
    };
  });
};

const weekDates = getWeekDates();

const attendanceData = weekDates.map(() => ({ in: '00:00', out: '00:00', total: '00:00' }));

const HomeScreen = () => {
  const navigation = useNavigation();

  const authenticateAndNavigate = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
      const { available } = await rnBiometrics.isSensorAvailable();

      if (!available) {
        Alert.alert(
          'Biometrics Unavailable',
          'Please set up fingerprint or face unlock in your device settings.',
        );
        return;
      }

      const { success, error } = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate to continue',
        cancelButtonText: 'Cancel',
      });

      if (success) {
        navigation.navigate('SignIn');
      } else if (error && !error.includes('cancel') && !error.includes('Cancel')) {
        Alert.alert('Authentication Failed', 'Please try again.');
      }
      // user tapped Cancel — do nothing silently
    } catch {
      Alert.alert('Error', 'Could not authenticate. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#0F2A44" />

      {/* ── Profile Card ── */}
      <View style={styles.profileCard}>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
        </View>
        <Text style={styles.userName}>Patel Chinmay Mahendrabhai</Text>
        <Text style={styles.userRole}>ERP Coordinator</Text>

        {/* Stats grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Work Today</Text>
            <Text style={styles.statValue}>04:50</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Worked This Week</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Leaves Available</Text>
            <Text style={styles.statValue}>0.0</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Leaves Utilised</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
        </View>
      </View>

      {/* ── Action Buttons ── */}
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={[styles.actionBtn, styles.signInBtn]}
          onPress={authenticateAndNavigate}
          activeOpacity={0.8}
        >
          <Text style={styles.actionBtnIcon}>↩</Text>
          <Text style={styles.actionBtnText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, styles.signOutBtn]}
          onPress={authenticateAndNavigate}
          activeOpacity={0.8}
        >
          <Text style={styles.actionBtnIcon}>↪</Text>
          <Text style={styles.actionBtnText}>SIGN OUT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, styles.leaveBtn]}
          activeOpacity={0.8}
        >
          <Text style={styles.actionBtnIcon}>📅</Text>
          <Text style={styles.actionBtnText}>APPLY LEAVE</Text>
        </TouchableOpacity>
      </View>

      {/* ── Weekly Attendance Table ── */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Attendance</Text>
        <View style={styles.table}>
          {/* Header */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader, styles.labelCol]}>Date</Text>
            {weekDates.map((d, i) => (
              <View key={i} style={[styles.tableCell, styles.dateCol]}>
                <Text style={styles.tableHeader}>{d.month}</Text>
                <Text style={styles.tableHeader}>{d.date}</Text>
                <Text style={styles.tableHeader}>{d.label}</Text>
              </View>
            ))}
          </View>

          {/* In row */}
          <View style={[styles.tableRow, styles.rowBg]}>
            <Text style={[styles.tableCell, styles.labelCol, styles.rowLabel]}>In</Text>
            {attendanceData.map((a, i) => (
              <Text key={i} style={[styles.tableCell, styles.dateCol, styles.timeText]}>{a.in}</Text>
            ))}
          </View>

          {/* Out row */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.labelCol, styles.rowLabel]}>Out</Text>
            {attendanceData.map((a, i) => (
              <Text key={i} style={[styles.tableCell, styles.dateCol, styles.timeText]}>{a.out}</Text>
            ))}
          </View>

          {/* Total row */}
          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCell, styles.labelCol, styles.totalLabel]}>Total</Text>
            {attendanceData.map((a, i) => (
              <Text key={i} style={[styles.tableCell, styles.dateCol, styles.totalText]}>{a.total}</Text>
            ))}
          </View>
        </View>
      </View>

      {/* ── User Info ── */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>User Details</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>CODE</Text>
          <Text style={styles.infoValue}>VRL0106</Text>
        </View>
        <View style={styles.infoDivider} />
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>ORGANISATION</Text>
          <Text style={styles.infoValue}>Vistara Realty LLP</Text>
        </View>
        <View style={styles.infoDivider} />
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>DEPARTMENT</Text>
          <Text style={styles.infoValue}>Management</Text>
        </View>
        <View style={styles.infoDivider} />
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>DESIGNATION</Text>
          <Text style={styles.infoValue}>ERP Coordinator</Text>
        </View>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default HomeScreen;
