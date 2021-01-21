import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL + '/phones/';

export const getPhones = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};

export const getPhone = (phoneId) =>
  fetch(baseUrl + phoneId)
    .then(handleResponse)
    .catch(handleError);

export const deletePhone = (phoneId) => {
  fetch(baseUrl + phoneId, { method: 'DELETE' }).catch(handleError);
};

export const savePhone = (phone) =>
  fetch(baseUrl + (phone._id || ''), {
    method: phone._id ? 'PUT' : 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ phone }),
  })
    .then(handleResponse)
    .catch(handleError);
