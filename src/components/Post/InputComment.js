import React, { useState } from 'react';

// Components
import ButtonIcon from '../UI/ButtonIcon';

// CSS
import classes from './InputComment.module.css';

const InputComment = () => {
  const [btnDisable, setBtnDisable] = useState(true);

  const inputHandler = (event) => {
    if (event.target.value.length >= 0) {
      setBtnDisable(false);
    }
  };

  const inputBlurHandler = (event) => {
    if (event.target.value.length <= 0) {
      setBtnDisable(true);
    }
  };

  return (
    <div className={`input-group border-0 ${classes['input-comment']}`}>
      <ButtonIcon>
        <i className="bi bi-emoji-smile"></i>
      </ButtonIcon>
      <input
        onChange={inputHandler}
        onBlur={inputBlurHandler}
        type="text"
        className="form-control border-0"
        placeholder="Add Comment..."
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <button
        type="button"
        disabled={btnDisable ? true : false}
        className="btn btn-light bg-white text-primary fw-bold fs-14"
      >
        Post
      </button>
    </div>
  );
};

export default InputComment;
