import React from 'react';
// Component
import UserProfile from '../User/UserProfile';

// CSS
import classes from './HeaderPost.module.css';

// Image
import UserImg from '../../assets/user-1.jpg';

const HeaderPost = () => {
  return (
    <div
      className={`card-header bg-white d-flex justify-content-between align-items-center ${classes.header}`}
    >
      <UserProfile
        img={UserImg}
        isStory
        size="32px"
        className={classes['user-profile']}
      />
      <a
        href="/"
        className="mb-0 flex-grow-1 px-2 fw-semibold text-decoration-none text-dark fs-14"
      >
        Mary Maxwell
      </a>
      <button type="button" className="btn btn-light">
        <i className="bi bi-three-dots"></i>
      </button>
    </div>
  );
};

export default HeaderPost;
