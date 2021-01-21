import './Navbar.css';
import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import PhoneFilter from '../phones/PhoneFilter';

const NavbarCmp = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="link-selected">
        Home
      </NavLink>
      <NavLink exact to="/phones" activeClassName="link-selected">
        Phones
      </NavLink>

      <Route exact path="/phones">
        <PhoneFilter initialSearchField={true} />
      </Route>
    </div>
  );
};

export default NavbarCmp;
