import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import styles from './styles';

const BALANCE_DATA = [
  { id: '1', date: '2 Jan 2026 5:30 AM',   description: 'Monthly Credit', leaveType: 'Paid Leave',    change: +1.5, balance: 3   },
  { id: '2', date: '1 Dec 2025 5:30 AM',   description: 'Monthly Credit', leaveType: 'Paid Leave',    change: +1.5, balance: 1.5 },
  { id: '3', date: '17 Nov 2025 5:30 AM',  description: 'Leave Applied',  leaveType: 'Sick Leave',    change: -1.5, balance: 0   },
  { id: '4', date: '1 Nov 2025 5:30 AM',   description: 'Monthly Credit', leaveType: 'Paid Leave',    change: +1.5, balance: 1.5 },
  { id: '5', date: '24 Oct 2025 5:30 AM',  description: 'Leave Applied',  leaveType: 'Casual Leave',  change: -3,   balance: 0   },
  { id: '6', date: '23 Oct 2025 5:30 AM',  description: 'Leave Applied',  leaveType: 'Casual Leave',  change: -1,   balance: 3   },
  { id: '7', date: '1 Oct 2025 5:30 AM',   description: 'Monthly Credit', leaveType: 'Paid Leave',    change: +1.5, balance: 4   },
  { id: '8', date: '30 Sept 2025 5:30 AM', description: 'Monthly Credit', leaveType: 'Paid Leave',    change: +1.5, balance: 2.5 },
  { id: '9', date: '10 Sept 2025 5:30 AM', description: 'Leave Applied',  leaveType: 'Sick Leave',    change: -1,   balance: 1   },
  { id: '10',date: '1 Sept 2025 5:30 AM',  description: 'Monthly Credit', leaveType: 'Paid Leave',    change: +1.5, balance: 2   },
];

const TableHeader = () => (
  <View style={styles.tableHeader}>
    <Text style={[styles.headerCell, styles.dateCol]}>Date</Text>
    <Text style={[styles.headerCell, styles.changeCol]}>(+/-)</Text>
    <Text style={[styles.headerCell, styles.balanceCol]}>Balance</Text>
  </View>
);

const BalanceRow = ({ item }) => {
  const isPositive = item.change > 0;
  return (
    <View style={styles.row}>
      <View style={styles.dateCol}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.leaveTypeText}>{item.leaveType}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <Text style={[styles.changeCell, styles.changeCol, isPositive ? styles.positive : styles.negative]}>
        {isPositive ? `+${item.change}` : `${item.change}`}
      </Text>
      <Text style={[styles.balanceCell, styles.balanceCol]}>{item.balance}</Text>
    </View>
  );
};

const BalanceScreen = () => {
  return (
    <View style={styles.container}>
      <TableHeader />
      <FlatList
        data={BALANCE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BalanceRow item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default BalanceScreen;
