import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PageNotFound from './PageNotFound';
import Navbar from './common/Navbar';
import About from './about/AboutPage';
import PhoneContentPage from './phones/PhoneContentPage';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="content-container">
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/phones" component={PhoneContentPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <ToastContainer autoClose={3000} hideProgressBar />
    </React.Fragment>
  );
}

export default App;
