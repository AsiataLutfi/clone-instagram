import React from 'react';

// CSS
import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  return (
    <a
      className={`btn btn-light p-0 ${classes['user-profile']} ${
        props.className ? props.className : ''
      }`}
      href="/"
      role="button"
    >
      <img
        src={props.img}
        alt="User"
        width={props.size}
        height={props.size}
        className={`${props.username ? 'mb-1' : ''} rounded-circle ${
          props.isStory ? 'border border-primary border-3' : ''
        }`}
      />
      {props.username ? <p className="mb-0">{props.username}</p> : ''}
    </a>
  );
};

export default UserProfile;
