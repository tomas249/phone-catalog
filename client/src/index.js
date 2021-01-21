import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);
