import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHome,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";

const NavButtons = () => {
  let navigate = useNavigate();

  const handleNavigation = (e, targetUrl) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      navigate(targetUrl);
    }, 500);
  };

  return (
    <>
      <div class="nav-container">
        <div class="nav-buttons">
          <Link to="/previous">
            <FontAwesomeIcon
              size="1x"
              icon={faArrowLeft}
              className="nav-button prev"
            />
          </Link>
          <Link to="/">
            <FontAwesomeIcon
              size="1x"
              icon={faHome}
              className="nav-button home"
            />
          </Link>
          <Link to="/">
            <FontAwesomeIcon
              size="1x"
              icon={faArrowRight}
              className="nav-button next"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavButtons;
