import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faHome,} from "@fortawesome/free-solid-svg-icons";

const NavButtons = ({ prev, next, isLight = false }) => {

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
