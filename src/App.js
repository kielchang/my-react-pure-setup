import React from "react";
import PropTypes from "prop-types";

import calc from "./calc";

function App({ title }) {
  return (
    <div>
      {title}, {calc(2, 3)}
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
