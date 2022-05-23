import React from 'react';
import UserProfile from './UserProfile';

// CSS
import classes from './UserSuggestion.module.css';

// Image
import UserProfileImg from '../../assets/user-1.jpg';

const UserSuggestion = () => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center ${classes['user-suggestion']}`}
    >
      <UserProfile img={UserProfileImg} size="32px" />
      <div className="d-flex flex-column flex-grow-1 fs-14 mx-2">
        <a href="/" className="text-dark text-decoration-none fw-bold">
          randomName
        </a>
        <p className={`mb-0 text-secondary ${classes['user-details']}`}>
          noon distant swung type lady wall
        </p>
      </div>
      <button type="button" class="btn btn-link text-decoration-none fs-14">
        Follow
      </button>
    </div>
  );
};

export default UserSuggestion;
