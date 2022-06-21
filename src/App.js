import React from "react";
import PropTypes from "prop-types";

function App({ title }) {
  return <div>{title}</div>;
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
