import React from 'react';

const PostDetail = () => {
  return (
    <div className="px-3">
      <p className="fw-bold mb-0">273 views</p>
      <p>
        <span className="fw-bold">Mary Maxwell</span>{' '}
        <a
          className="text-decoration-none text-secondary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          more
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <p>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </p>
      </div>
    </div>
  );
};

export default PostDetail;
