import React from 'react';

// Components
import Card from '../UI/Card';
import UserProfile from '../User/UserProfile';

import User1 from '../../assets/user-1.jpg';
import User2 from '../../assets/user-2.jpg';
import User3 from '../../assets/user-3.jpg';
import User4 from '../../assets/user-4.jpg';

const DUMMY_USERS = [
  { id: 'u1', username: 'Mary Maxwell', imgSrc: User1, story: true },
  { id: 'u2', username: 'Rosetta', imgSrc: User2, story: true },
  { id: 'u3', username: 'Troy Marshall', imgSrc: User3, story: true },
  { id: 'u4', username: 'Antonio', imgSrc: User4, story: false },
];

const Stories = () => {
  return (
    <Card className="d-flex flex-row py-3 mb-3">
      {DUMMY_USERS.map((user) => (
        <UserProfile
          key={user.id}
          img={user.imgSrc}
          username={user.username}
          isStory={user.story}
          size="52px"
          className="mx-2"
        />
      ))}
    </Card>
  );
};

export default Stories;
