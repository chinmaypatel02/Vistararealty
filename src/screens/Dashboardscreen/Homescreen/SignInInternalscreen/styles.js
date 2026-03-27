import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },

  locationCard: {
    backgroundColor: '#fff', margin: 14, borderRadius: 12,
    padding: 16, elevation: 3,
  },
  locRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  locDot: { width: 14, height: 14, borderRadius: 7 },
  locTitle: { fontSize: width * 0.038, fontWeight: '700', color: '#222' },
  locCoords: { fontSize: width * 0.028, color: '#888', marginTop: 2 },
  locLoadingText: { marginLeft: 10, color: '#555' },
  locBadge: { fontSize: 22, fontWeight: 'bold' },

  statusRow: { flexDirection: 'row', marginHorizontal: 14, marginBottom: 14, gap: 10 },
  statusBox: {
    flex: 1, backgroundColor: '#1E4080', borderRadius: 10,
    padding: 14, alignItems: 'center',
  },
  statusBoxRight: { backgroundColor: '#D44B1A' },
  statusLabel: { color: 'rgba(255,255,255,0.8)', fontSize: width * 0.028, marginBottom: 4 },
  statusValue: { color: '#fff', fontSize: width * 0.05, fontWeight: 'bold' },

  card: {
    backgroundColor: '#fff', marginHorizontal: 14,
    marginBottom: 14, borderRadius: 12, padding: 16, elevation: 2,
  },
  timeRow: { flexDirection: 'row', marginBottom: 14 },
  timeBox: {
    flex: 1, backgroundColor: '#E8F5F3', borderRadius: 10,
    padding: 12, alignItems: 'center',
  },
  timeLabel: { fontSize: width * 0.03, fontWeight: '700', color: '#555', marginBottom: 4 },
  timeValue: { fontSize: width * 0.04, fontWeight: 'bold', color: '#1E4080' },
  timeMuted: { fontSize: width * 0.038, color: '#aaa' },

  fieldLabel: { fontSize: width * 0.033, fontWeight: '600', color: '#555', marginBottom: 6 },
  dateRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 },
  dateText: { fontSize: width * 0.045, color: '#222' },
  divider: { height: 1, backgroundColor: '#F0F0F0', marginVertical: 12 },

  remarksInput: {
    borderBottomWidth: 1, borderBottomColor: '#ddd',
    paddingVertical: 8, fontSize: width * 0.035,
    color: '#333', marginBottom: 12, minHeight: 40,
  },

  expandBtn: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', backgroundColor: '#E8F5F3',
    borderRadius: 10, padding: 14, marginBottom: 8,
  },
  expandText: { fontSize: width * 0.035, fontWeight: '700', color: '#1E4080' },
  expandArrow: { fontSize: 18, color: '#1E4080' },
  moreDetail: { padding: 12, backgroundColor: '#f9f9f9', borderRadius: 8, marginBottom: 8 },
  moreDetailText: { fontSize: width * 0.033, color: '#555', marginBottom: 4 },

  bottomRow: { flexDirection: 'row', marginHorizontal: 14, gap: 10, marginBottom: 14 },
  bottomBtn: {
    flex: 1, borderRadius: 10, paddingVertical: 16,
    alignItems: 'center', elevation: 2,
  },
  signOutBtn: { backgroundColor: '#1E4080' },
  checkInBtn: { backgroundColor: '#D44B1A' },
  btnDisabled: { opacity: 0.4 },
  bottomBtnText: { color: '#fff', fontWeight: 'bold', fontSize: width * 0.038 },
});

export default styles;
