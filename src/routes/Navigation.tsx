import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';

import { routes } from "./routes";
import { Suspense } from 'react';

// import { LazyPage01, LazyPage02, LazyPage03 } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="main-layout">
          <nav>
            <NavLink to="/" activeClassName="nav-active" exact>
              <img src={logo} alt="React Logo" />
            </NavLink>

            <ul>
              {routes.map(route => (
                <li key={route.name}>
                  <NavLink to={route.to} activeClassName="nav-active" exact>
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(route => (
              <Route key={route.name} path={route.path} exact>
                <route.Component />
              </Route>
            ))}
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="*">
              <h1>404 - Not Found</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}