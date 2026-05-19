import {
  LEAVE_HISTORY_REQUEST,
  LEAVE_HISTORY_SUCCESS,
  LEAVE_HISTORY_FAILURE,
} from '../types/leaveHistoryTypes';

const initialState = {
  historyLoading: false,
  historyData:    [],
  historyError:   null,
};

const leaveHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_HISTORY_REQUEST:
      return { ...state, historyLoading: true, historyError: null };
    case LEAVE_HISTORY_SUCCESS:
      return { ...state, historyLoading: false, historyData: action.payload };
    case LEAVE_HISTORY_FAILURE:
      return { ...state, historyLoading: false, historyError: action.payload };
    default:
      return state;
  }
};

export default leaveHistoryReducer;
