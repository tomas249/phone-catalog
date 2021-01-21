import * as types from './actionTypes';
import * as phoneApi from '../../api/phoneApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

const loadPhonesSuccess = (phones) => ({
  type: types.LOAD_PHONES_SUCCESS,
  phones,
});

const loadPhoneSuccess = (phone) => ({
  type: types.LOAD_PHONE_SUCCESS,
  phone,
});

const createPhoneSuccess = (phone) => ({
  type: types.CREATE_PHONE_SUCCESS,
  phone,
});

const updatePhoneSuccess = (phone) => ({
  type: types.UPDATE_PHONE_SUCCESS,
  phone,
});

const deletePhoneOptimistic = (phone) => ({
  type: types.DELETE_PHONE_OPTIMISTIC,
  phone,
});

export const loadPhones = () => (dispatch) => {
  dispatch(beginApiCall());
  return phoneApi
    .getPhones()
    .then((phones) => {
      dispatch(loadPhonesSuccess(phones));
    })
    .catch((error) => {
      dispatch(apiCallError());
      throw error;
    });
};

export const deletePhone = (phone) => (dispatch) => {
  dispatch(deletePhoneOptimistic(phone));
  return phoneApi.deletePhone(phone._id);
};

export const savePhone = (phone) => (dispatch) => {
  dispatch(beginApiCall());
  return phoneApi
    .savePhone(phone)
    .then((savedPhone) => {
      phone._id
        ? dispatch(updatePhoneSuccess(savedPhone))
        : dispatch(createPhoneSuccess(savedPhone));
    })
    .catch((error) => {
      dispatch(apiCallError());
      throw error;
    });
};

export const loadPhone = (phoneId, phone = null) => (dispatch) => {
  if (phone) return dispatch({ type: types.SET_PHONE, phone });
  dispatch(beginApiCall());
  return phoneApi
    .getPhone(phoneId)
    .then((phone) => {
      dispatch(loadPhoneSuccess(phone));
    })
    .catch((error) => {
      dispatch(apiCallError());
      throw error;
    });
};

export const setPhone = (phone) => ({
  type: types.SET_PHONE,
  phone,
});

export const setPhonesFilter = (text) => ({
  type: types.SET_PHONES_FILTER,
  text,
});
