import React, { Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import routes from "../src/router/Router";
import { connect } from "react-redux";
import Navbar from "./components/layouts/Navbar";
import Loading from "./components/pages/Loading";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(connect(mapStateToProps, null)(App));
