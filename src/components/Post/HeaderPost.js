import React from 'react';
// Component
import UserProfile from '../User/UserProfile';

// CSS
import classes from './HeaderPost.module.css';

// Image
import UserImg from '../../assets/user-1.jpg';

const HeaderPost = () => {
  return (
    <div className="card-header bg-light d-flex justify-content-between align-items-center">
      <UserProfile
        img={UserImg}
        isStory
        size="32px"
        className={classes['user-profile']}
      />
      <p className="mb-0 flex-grow-1 px-2">Mary Maxwell</p>
      <button type="button" className="btn btn-light">
        <i className="bi bi-three-dots"></i>
      </button>
    </div>
  );
};

export default HeaderPost;
