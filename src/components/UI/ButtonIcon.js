import React from 'react';

// CSS
import classes from './ButtonIcon.module.css';

const ButtonIcon = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-light ${classes['btn-icon']} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonIcon;
