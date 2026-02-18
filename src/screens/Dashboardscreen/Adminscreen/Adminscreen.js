import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../../../constants/theme';
import styles from './styles';

const AdminScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleLogout = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>StrategicERP</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.screenTitle}>Admin Screen</Text>
      </View>
    </View>
  );
};

export default AdminScreen;