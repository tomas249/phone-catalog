import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function phonesReducer(state = initialState.phones, action) {
  switch (action.type) {
    case types.LOAD_PHONES_SUCCESS:
      return { ...state, list: action.phones };
    case types.UPDATE_PHONE_SUCCESS:
      return {
        ...state,
        list: state.list.map((phone) =>
          phone._id === action.phone._id ? action.phone : phone
        ),
        filtered: [],
        filteredValue: '',
      };
    case types.CREATE_PHONE_SUCCESS:
      return { ...state, list: [...state.list, action.phone] };
    case types.DELETE_PHONE_OPTIMISTIC:
      return {
        ...state,
        list: state.list.filter((phone) => phone._id !== action.phone._id),
        filtered: state.filtered.filter(
          (phone) => phone._id !== action.phone._id
        ),
      };
    case types.SET_PHONES_FILTER:
      const filteredValue = action.text.toLowerCase();
      const filtered = state.list.filter((phone) => {
        const { name, manufacturer } = phone;
        return (
          name.toLowerCase().includes(filteredValue) ||
          manufacturer.toLowerCase().includes(filteredValue)
        );
      });
      return { ...state, filtered, filteredValue };
    default:
      return state;
  }
}

export function phoneReducer(state = initialState.phone, action) {
  switch (action.type) {
    case types.LOAD_PHONE_SUCCESS:
      return action.phone;
    case types.SET_PHONE:
      return action.phone;
    default:
      return state;
  }
}
