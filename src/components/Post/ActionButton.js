import React from 'react';
import ButtonIcon from '../UI/ButtonIcon';

const ActionButton = () => {
  return (
    <div className="p-2 d-flex align-items-center">
      <div className="btn-group" role="group" aria-label="Basic example">
        <ButtonIcon>
          <i className="bi bi-heart"></i>
        </ButtonIcon>
        <ButtonIcon>
          <i className="bi bi-chat"></i>
        </ButtonIcon>
        <ButtonIcon>
          <i className="bi bi-send"></i>
        </ButtonIcon>
      </div>
      <ButtonIcon className="ms-auto">
        <i className="bi bi-bookmark"></i>
      </ButtonIcon>
    </div>
  );
};

export default ActionButton;
