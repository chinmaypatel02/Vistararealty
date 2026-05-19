import {
  LEAVE_BALANCE_REQUEST,
  LEAVE_BALANCE_SUCCESS,
  LEAVE_BALANCE_FAILURE,
} from '../types/leaveBalanceTypes';

const initialState = {
  balanceLoading: false,
  balanceData:    [],
  balanceError:   null,
};

const leaveBalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_BALANCE_REQUEST:
      return { ...state, balanceLoading: true, balanceError: null };
    case LEAVE_BALANCE_SUCCESS:
      return { ...state, balanceLoading: false, balanceData: action.payload };
    case LEAVE_BALANCE_FAILURE:
      return { ...state, balanceLoading: false, balanceError: action.payload };
    default:
      return state;
  }
};

export default leaveBalanceReducer;
