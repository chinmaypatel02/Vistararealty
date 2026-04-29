import React from 'react';
import {
  View,
  Text,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';
import images from '../../../../constants/images';
import styles from './styles';

const HISTORY_DATA = [
  {
    month: 'May 2026',
    data: [
      { id: '1', name: 'Kishan Sadhariya', avatar: null, session: 'Full Day',     date: 'Tue, May 5', leaveType: 'Casual Leave', status: 'Approved' },
      { id: '2', name: 'Kishan Sadhariya', avatar: null, session: 'First Half',   date: 'Mon, May 4', leaveType: 'Sick Leave',   status: 'Pending'  },
      { id: '3', name: 'Kishan Sadhariya', avatar: null, session: 'Second Half',  date: 'Mon, May 4', leaveType: 'Paid Leave',   status: 'Approved' },
    ],
  },
  {
    month: 'March 2026',
    data: [
      { id: '4', name: 'Kishan Sadhariya', avatar: null, session: 'Full Day',    date: 'Mon, Mar 10', leaveType: 'Casual Leave', status: 'Approved' },
      { id: '5', name: 'Kishan Sadhariya', avatar: null, session: 'Full Day',    date: 'Fri, Mar 7',  leaveType: 'Sick Leave',   status: 'Rejected' },
    ],
  },
  {
    month: 'January 2026',
    data: [
      { id: '6', name: 'Kishan Sadhariya', avatar: null, session: 'First Half',  date: 'Wed, Jan 15', leaveType: 'Paid Leave',   status: 'Approved' },
      { id: '7', name: 'Kishan Sadhariya', avatar: null, session: 'Full Day',    date: 'Mon, Jan 6',  leaveType: 'Casual Leave', status: 'Pending'  },
    ],
  },
];

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

const LeaveCard = ({ item }) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.85}>
    {/* Left — Avatar + Name */}
    <View style={styles.avatarSection}>
      {item.avatar
        ? <Image source={{ uri: item.avatar }} style={styles.avatar} />
        : <AvatarPlaceholder name={item.name} />
      }
      <Text style={styles.nameText} numberOfLines={2}>{item.name}</Text>
    </View>

    {/* Middle — Session, Date, Leave Type */}
    <View style={styles.infoSection}>
      <Text style={styles.sessionText}>{item.session}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.leaveTypeText}>{item.leaveType}</Text>
    </View>

    {/* Right — Status badge + Chevron */}
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

const HistoryScreen = () => (
  <SectionList
    sections={HISTORY_DATA}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <LeaveCard item={item} />}
    renderSectionHeader={({ section }) => (
      <Text style={styles.monthHeader}>{section.month}</Text>
    )}
    contentContainerStyle={styles.listContent}
    showsVerticalScrollIndicator={false}
    stickySectionHeadersEnabled={false}
  />
);

export default HistoryScreen;
