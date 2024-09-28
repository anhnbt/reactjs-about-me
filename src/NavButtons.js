import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHome,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";

const NavButtons = ({ prev, next, isLight = false }) => {
  let navigate = useNavigate();

  return (
    <>
      <div className={isLight ? 'light nav-container' : 'nav-container'}>
        <div className="nav-buttons">
          {prev && (
            <Link to={prev}>
              <FontAwesomeIcon
                size="1x"
                icon={faArrowLeft}
                className="nav-button prev"
              />
            </Link>
          )}
          <Link to="/">
            <FontAwesomeIcon
              size="1x"
              icon={faHome}
              className="nav-button home"
            />
          </Link>
          {next && (
          <Link to={next}>
            <FontAwesomeIcon
              size="1x"
              icon={faArrowRight}
              className="nav-button next"
            />
          </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavButtons;
