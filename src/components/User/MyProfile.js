import React from 'react';

// Components
import UserProfile from './UserProfile';

// Image
import Profile from '../../assets/profile.jpg';

const SideUser = () => {
  return (
    <div className="py-2 d-flex justify-content-betwwen align-items-center">
      <UserProfile img={Profile} size="66px" isStory />
      <div className="d-flex flex-grow-1 flex-column mx-2 fs-14">
        <a href="/" className="fw-bold text-dark text-decoration-none">
          My.profile
        </a>
        <p className="mb-0 text-secondary">my profile</p>
      </div>
      <button type="button" class="btn btn-link text-decoration-none fs-14">
        Switch
      </button>
    </div>
  );
};

export default SideUser;
