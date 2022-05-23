import React from 'react';

// Components
import ButtonIcon from '../UI/ButtonIcon';

const InputComment = () => {
  return (
    <div className="input-group border-0">
      <ButtonIcon>
        <i className="bi bi-emoji-smile"></i>
      </ButtonIcon>
      <input
        type="text"
        className="form-control border-0"
        placeholder="Add Comment..."
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <button type="button" className="btn btn-light text-primary">
        Send
      </button>
    </div>
  );
};

export default InputComment;
