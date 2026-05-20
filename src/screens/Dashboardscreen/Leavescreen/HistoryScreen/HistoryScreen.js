import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SectionList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaveHistory } from '../../../../redux/actions/leaveHistoryActions';
import { updateLeaveStatus, resetLeaveAction } from '../../../../redux/actions/leaveActionActions';
import images from '../../../../constants/images';
import styles from './styles';
import LeaveDetailModal from './LeaveDetailModal';

const getStatusStyle = (status) => {
  switch (status) {
    case 'Approved': return styles.statusApproved;
    case 'Pending':  return styles.statusPending;
    case 'Rejected': return styles.statusRejected;
    default:         return styles.statusPending;
  }
};

const getStatusTextStyle = (status) => {
  switch (status) {
    case 'Approved': return styles.statusTextApproved;
    case 'Pending':  return styles.statusTextPending;
    case 'Rejected': return styles.statusTextRejected;
    default:         return styles.statusTextPending;
  }
};

const AvatarPlaceholder = ({ name }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <View style={styles.avatarPlaceholder}>
      <Text style={styles.avatarInitials}>{initials}</Text>
    </View>
  );
};

const LeaveCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => onPress(item)}>
    <View style={styles.avatarSection}>
      {item.avatar
        ? <Image source={{ uri: item.avatar }} style={styles.avatar} />
        : <AvatarPlaceholder name={item.name} />
      }
      <Text style={styles.nameText} numberOfLines={2}>{item.name}</Text>
    </View>

    <View style={styles.infoSection}>
      <Text style={styles.sessionText}>{item.session}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.leaveTypeText}>{item.leave_type}</Text>
    </View>

    <View style={styles.rightSection}>
      <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
        <Text style={[styles.statusText, getStatusTextStyle(item.status)]}>
          {item.status}
        </Text>
      </View>
      <Image source={images.rightArrow} style={styles.chevronIcon} />
    </View>
  </TouchableOpacity>
);

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const { historyLoading, historyData, historyError } = useSelector((s) => s.leaveHistory);
  const { actionLoading, actionSuccess, actionError }  = useSelector((s) => s.leaveAction);

  const [selectedLeave, setSelectedLeave] = useState(null);
  const [modalVisible,  setModalVisible]  = useState(false);

  useEffect(() => {
    dispatch(fetchLeaveHistory());
  }, []);

  useEffect(() => {
    if (actionSuccess) {
      const label = actionSuccess.status === 'approved' ? 'Approved' : 'Rejected';
      Alert.alert('Success', `Leave ${label} successfully.`);
      setModalVisible(false);
      setSelectedLeave(null);
      dispatch(resetLeaveAction());
      dispatch(fetchLeaveHistory());
    }
  }, [actionSuccess]);

  useEffect(() => {
    if (actionError) {
      Alert.alert('Error', actionError);
      dispatch(resetLeaveAction());
    }
  }, [actionError]);

  const handleCardPress = (item) => {
    setSelectedLeave(item);
    setModalVisible(true);
  };

  const handleApprove = () => {
    if (selectedLeave) dispatch(updateLeaveStatus(selectedLeave.id, 'approved'));
  };

  const handleReject = () => {
    if (selectedLeave) dispatch(updateLeaveStatus(selectedLeave.id, 'rejected'));
  };

  const handleClose = () => {
    if (actionLoading) return;
    setModalVisible(false);
    setSelectedLeave(null);
  };

  if (historyLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#1E4080" />
      </View>
    );
  }

  if (historyError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{historyError}</Text>
      </View>
    );
  }

  return (
    <>
      <SectionList
        sections={historyData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <LeaveCard item={item} onPress={handleCardPress} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.monthHeader}>{section.month}</Text>
        )}
        contentContainerStyle={[
          styles.listContent,
          historyData.length === 0 && styles.emptyContainer,
        ]}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={
          <View style={styles.centered}>
            <Text style={styles.emptyText}>No leave history found.</Text>
          </View>
        }
      />

      <LeaveDetailModal
        visible={modalVisible}
        leave={selectedLeave}
        onClose={handleClose}
        onApprove={handleApprove}
        onReject={handleReject}
        actionLoading={actionLoading}
      />
    </>
  );
};

export default HistoryScreen;
