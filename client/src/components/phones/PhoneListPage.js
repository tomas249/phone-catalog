import './PhoneListPage.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  loadPhones,
  setPhone,
  deletePhone,
} from '../../redux/actions/phoneActions';
import { toast } from 'react-toastify';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import PhoneList from './PhoneList';
import { withRouter } from 'react-router-dom';
function PhoneListPage({
  history,
  phones,
  filtered,
  setPhone,
  apiCalls,
  loadPhones,
  deletePhone,
  setPhonesFilter,
  ...props
}) {
  useEffect(() => {
    loadPhones();
  }, []);

  function handleDetails(phone) {
    setPhone(phone);
    history.push(`/phones/${phone._id}/details`);
  }

  function handleDelete(phone) {
    toast.success('Phone deleted');
    deletePhone(phone);
  }

  function handleEdit(phone) {
    setPhone(phone);
    history.push(`/phones/${phone._id}/edit`);
  }

  if (apiCalls > 0 && phones.list.length === 0) {
    return (
      <React.Fragment>
        <h1>List page ...</h1>
        <Loader type="Puff" color="#00BFFF" height={100} width={100}></Loader>
      </React.Fragment>
    );
  } else if (apiCalls === 0 && phones.list.length === 0) {
    return <h1>Phones list is empty</h1>;
  } else {
    return (
      <div className="list-page-container">
        <PhoneList
          phoneList={phones.filteredValue ? phones.filtered : phones.list}
          handleDetails={handleDetails}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    apiCalls: state.apiCallsInProgress,
    phones: state.phones,
  };
}

const mapDispatchToProps = {
  loadPhones,
  setPhone,
  deletePhone,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PhoneListPage)
);
