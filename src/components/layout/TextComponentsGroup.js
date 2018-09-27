import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const TextComponentsGroup = ({
  //giving it a props in the parameter
  label,
  name,
  type,
  onChange,
  placeholder,
  value,
  error
}) => {
  return (
    <div className="mt-3">
      <label htmlFor={name} className="text-danger">
        {label}
      </label>
      <input
        type={type}
        className={classnames("form-control form control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextComponentsGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};
TextComponentsGroup.defaultProps = {
  type: PropTypes.string.isRequired
};
export default TextComponentsGroup;
