import './PhoneDisplayPage.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Switch, Route } from 'react-router-dom';

import PhoneFormPage from './PhoneFormPage';
import PhoneManage from './PhoneManage';

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(176, 196, 222, 0.397)',
  },
};
Modal.setAppElement('#root');

export default function PhoneDisplayPage({ history, useModal }) {
  const [modalIsOpen, setModalIsOpen] = useState(useModal);

  const customModal = (children) => {
    return (
      <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={goMainPage}>
        <div className="close" onClick={goMainPage}>
          X
        </div>
        {children}
      </Modal>
    );
  };

  function handleSave() {
    goMainPage();
  }

  function goMainPage() {
    history.push('/phones');
  }

  return (
    <ConditionalWrapper condition={useModal} wrapper={customModal}>
      <Switch>
        <Route
          path="/phones/add"
          component={() => (
            <PhoneFormPage
              phone={null}
              handleCancel={goMainPage}
              handleSave={handleSave}
            />
          )}
        />
        <Route
          path="/phones/:phoneId"
          component={(props) => <PhoneManage {...props} handleCancel={goMainPage} />}
        />
      </Switch>
    </ConditionalWrapper>
  );
}
