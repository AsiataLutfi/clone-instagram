import React from 'react';

// Components
import ButtonIcon from './ButtonIcon';

// CSS
import classes from './ProfileButton.module.css';

const ProfileButton = (props) => {
  return (
    <ButtonIcon className={classes['profile-btn']}>{props.children}</ButtonIcon>
  );
};

export default ProfileButton;
