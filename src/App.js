import React, { Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import routes from "../src/router/Router";
import Navigationbar from "./components/layouts/Navigationbar";
import Loading from "./components/pages/Loading";

function App() {
  return (
    <div className="App">
      <Navigationbar />
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
