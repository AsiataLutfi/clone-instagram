import React, { useState } from 'react';

const PostDetail = () => {
  const [descIsHide, setDescIsHide] = useState(true);

  const descHideHandler = () => {
    setDescIsHide((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="px-3">
      <p className="fw-semibold mb-0">273 views</p>
      <p className="fw-semibold mb-0">Mary Maxwell</p>
      <div className="collapse" id="collapseExample">
        <p className="mb-0">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </p>
      </div>
      <a
        className="text-decoration-none text-secondary"
        data-bs-toggle="collapse"
        href="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={descHideHandler}
      >
        {descIsHide ? 'more' : 'hide'}
      </a>
    </div>
  );
};

export default PostDetail;
