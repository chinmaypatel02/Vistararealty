import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../constants/api';
import {
  LEAVE_HISTORY_REQUEST,
  LEAVE_HISTORY_SUCCESS,
  LEAVE_HISTORY_FAILURE,
} from '../types/leaveHistoryTypes';

export const fetchLeaveHistory = () => async (dispatch) => {
  dispatch({ type: LEAVE_HISTORY_REQUEST });
  try {
    const token = await AsyncStorage.getItem('access_token');
    const response = await fetch(`${BASE_URL}/api/attendance/leave-history/`, {
      method:  'GET',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log('✅ Leave History Fetch Success');
      console.log('📥 Response received:', JSON.stringify(data, null, 2));
      dispatch({ type: LEAVE_HISTORY_SUCCESS, payload: data });
    } else {
      dispatch({ type: LEAVE_HISTORY_FAILURE, payload: data.detail || JSON.stringify(data) });
    }
  } catch {
    dispatch({ type: LEAVE_HISTORY_FAILURE, payload: 'Network error. Check your connection.' });
  }
};
