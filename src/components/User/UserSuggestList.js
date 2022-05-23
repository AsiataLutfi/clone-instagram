import React from 'react';
import UserSuggestion from './UserSuggestion';

// CSS

const UserSuggestList = () => {
  return (
    <ul class="list-group">
      <li class="list-group-item border-0 px-0">
        <UserSuggestion />
      </li>
      <li class="list-group-item border-0 px-0">
        <UserSuggestion />
      </li>
      <li class="list-group-item border-0 px-0">
        <UserSuggestion />
      </li>
      <li class="list-group-item border-0 px-0">
        <UserSuggestion />
      </li>
    </ul>
  );
};

export default UserSuggestList;
