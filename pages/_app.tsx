import "../styles/globals.css";
import PropTypes from "prop-types";
import * as React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
