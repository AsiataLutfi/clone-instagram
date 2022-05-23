import React from 'react';

// Components
import ButtonIcon from '../UI/ButtonIcon';
import ProfileButton from '../UI/ProfileButton';

// Image
import Logo from '../../assets/logo.png';
import ProfilePic from '../../assets/profile.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" width="103px" height="29px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <form className="d-flex mx-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="navbar-nav ms-auto">
            <ButtonIcon>
              <i className="bi bi-house-door-fill"></i>
            </ButtonIcon>
            <ButtonIcon>
              <i className="bi bi-messenger"></i>
            </ButtonIcon>
            <ButtonIcon>
              <i className="bi bi-plus-square-fill"></i>
            </ButtonIcon>
            <ButtonIcon>
              <i className="bi bi-compass-fill"></i>
            </ButtonIcon>
            <ButtonIcon>
              <i className="bi bi-heart-fill"></i>
            </ButtonIcon>
            <ProfileButton>
              <img src={ProfilePic} alt="Profile" />
            </ProfileButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
