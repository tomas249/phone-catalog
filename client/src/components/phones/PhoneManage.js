import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { loadPhone, deletePhone } from '../../redux/actions/phoneActions';
import PhoneFormPage from './PhoneFormPage';
import PhoneDetails from './PhoneDetails';

function PhoneManage({
  history,
  match,
  phone,
  loadPhone,
  deletePhone,
  handleCancel,
}) {
  useEffect(() => {
    if (!phone) loadPhone(match.params.phoneId);
  }, []);

  function onDelete(phone) {
    toast.success('Phone deleted');
    deletePhone(phone);
    history.push('/phones');
  }

  function handleEdit(phone) {
    history.push(`/phones/${phone._id}/edit`);
  }

  if (!phone) {
    return (
      <React.Fragment>
        <h1>Loading phone ...</h1>
        <Loader type="Puff" color="#00BFFF" height={100} width={100}></Loader>
      </React.Fragment>
    );
  } else if (phone) {
    return (
      <Switch>
        <Route
          path="/phones/:phoneId/edit"
          component={() => (
            <PhoneFormPage
              phone={phone}
              handleCancel={handleCancel}
              handleSave={handleCancel}
            />
          )}
        />
        <Route
          path="/phones/:phoneId/details"
          component={() => (
            <PhoneDetails
              phone={phone}
              handleEdit={handleEdit}
              handleDelete={onDelete}
            />
          )}
        />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    phone: state.phone,
  };
}

const mapDispatchToProps = {
  loadPhone,
  deletePhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneManage);
