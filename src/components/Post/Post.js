import React from 'react';

// Components
import Card from '../UI/Card';
import HeaderPost from './HeaderPost';
import ActionButton from './ActionButton';

// CSS
import classes from './Post.module.css';

// Image
import PostImg from '../../assets/post-1.jpg';
import InputComment from './InputComment';
import PostDetail from './PostDetail';

const Post = () => {
  return (
    <Card className={classes.post}>
      <HeaderPost />
      <div className="card-body p-0">
        <img
          src={PostImg}
          alt="Post"
          width="100%"
          height="800px"
          className={classes['image-post']}
        />
        <ActionButton />
        <PostDetail />
      </div>
      <div className="card-footer p-0">
        <InputComment />
      </div>
    </Card>
  );
};

export default Post;
