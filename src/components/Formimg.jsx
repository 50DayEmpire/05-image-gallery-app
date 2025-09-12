import React from "react";
import PropTypes from "prop-types";

const Formimg = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className="w-75">
        Buscar: <input type="text" name="inputText" className="w-100" />
      </label>
      <button type="submit" className="btn btn-warning m-2">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

Formimg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Formimg;
