import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';

import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <NavLink to="/" activeClassName="nav-active" exact>
            <img src={logo} alt="React Logo" />
          </NavLink>

          <ul>
            <li>
              <NavLink to="/lazy/01" activeClassName="nav-active" exact>Lazy 01</NavLink>
            </li>
            <li>
              <NavLink to="/lazy/02" activeClassName="nav-active" exact>Lazy 02</NavLink>
            </li>
            <li>
              <NavLink to="/lazy/03" activeClassName="nav-active" exact>Lazy 03</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lazy/01">
            <LazyPage01 />
          </Route>
          <Route path="/lazy/02">
            <LazyPage02 />
          </Route>
          <Route path="/lazy/03">
            <LazyPage03 />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}