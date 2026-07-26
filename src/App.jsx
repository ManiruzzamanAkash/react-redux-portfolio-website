/**
 * External dependencies.
 */
import React, { Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

/**
 * Internal dependencies.
 */
import routes from "../src/router/Router";
import NavigationBar from "./components/layouts/Navigationbar";
import Loading from "./components/pages/Loading";

function App() {
  return (
    <div className="App">
      <NavigationBar />
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

export default withRouter(App);
