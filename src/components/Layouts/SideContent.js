import React from 'react';

// Components
import MyProfile from '../User/MyProfile';
import UserSuggestList from '../User/UserSuggestList';
import Footer from './Footer';

const SideContent = () => {
  return (
    <React.Fragment>
      <MyProfile />
      <div className="d-flex justify-content-between align-items-center py-1">
        <p className="text-secondary fw-bold mb-0">Suggestions For You</p>
        <button type="button" class="btn btn-light text-secondary">
          See All
        </button>
      </div>
      <UserSuggestList />
      <Footer />
    </React.Fragment>
  );
};

export default SideContent;
