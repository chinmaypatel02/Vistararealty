import {
  LEAVE_BALANCE_REQUEST,
  LEAVE_BALANCE_SUCCESS,
  LEAVE_BALANCE_FAILURE,
  LEAVE_BALANCE_REFRESH,
} from '../types/leaveBalanceTypes';

const initialState = {
  balanceLoading:  false,
  balanceData:     [],
  balanceError:    null,
  refreshTrigger:  0,
};

const leaveBalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_BALANCE_REQUEST:
      return { ...state, balanceLoading: true, balanceError: null };
    case LEAVE_BALANCE_SUCCESS:
      return { ...state, balanceLoading: false, balanceData: action.payload };
    case LEAVE_BALANCE_FAILURE:
      return { ...state, balanceLoading: false, balanceError: action.payload };
    case LEAVE_BALANCE_REFRESH:
      return { ...state, refreshTrigger: state.refreshTrigger + 1 };
    default:
      return state;
  }
};

export default leaveBalanceReducer;
