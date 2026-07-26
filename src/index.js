/**
 * External dependencies.
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

/**
 * Internal dependencies.
 */
import App from "./App";
import "react-toastify/dist/ReactToastify.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./assets/styles/template_style.css";
import "./assets/styles/style.css";
import "./assets/styles/responsive.css";

// Language
import Translations from "./store/actions/language/Translations";
import { IntlProvider } from "react-redux-multilingual";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/Store";
const languageLocale = "en";

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <BrowserRouter>
        <IntlProvider translations={Translations} locale={languageLocale}>
          <App />
        </IntlProvider>
      </BrowserRouter>
    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
