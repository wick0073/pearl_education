
import '../../css/Testimonials/button.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Button = ({ children, onClick, type, disabled, className, size, redirectTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (redirectTo) navigate(redirectTo);
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className={`btn ${size} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(['btn-small', 'btn-medium', 'btn-large']),
  redirectTo: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  disabled: false,
  className: '',
  size: 'btn-medium',
  redirectTo: null,
};

export default Button;
