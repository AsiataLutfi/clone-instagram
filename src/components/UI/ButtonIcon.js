import React from 'react';

// CSS
import classes from './ButtonIcon.module.css';

const ButtonIcon = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-light bg-white border-0 ${classes['btn-icon']} ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </button>
  );
};

export default ButtonIcon;
