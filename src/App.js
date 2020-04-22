import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Menu/Menu";
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <div className="container-fluid d-flex px-0">
        <div className="px-0" style={{ width: '18%' }}>
          <Navigation />
        </div>
        <div className="px-3" style={{ width: '82%' }}>{showContentMenu(routes)}</div>
      </div>
    </Router>
  );
};

const showContentMenu = (routes) => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return <Switch>{result}</Switch>;
};

export default App;
