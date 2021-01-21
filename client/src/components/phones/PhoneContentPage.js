import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import PhoneListPage from './PhoneListPage';
import PhoneDisplayPage from './PhoneDisplayPage';

export default function PhoneContentPage(history) {
  const [useModal, setUseModal] = useState(history.match.isExact);

  useEffect(() => {
    setUseModal(useModal || history.match.isExact);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <div>
      {useModal && <PhoneListPage />}
      <Route exact path="/phones/" render={() => <Redirect to="/phones" />} />
      <Route
        path="/phones/*"
        component={(props) => (
          <PhoneDisplayPage {...props} useModal={useModal} />
        )}
      />
    </div>
  );
}
