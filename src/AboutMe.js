import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import NavButtons from "./NavButtons";

const AboutMe = () => {
  useEffect(() => {
    document.title = "Chào hỏi và làm quen";
  }, []);

  return (
    <div className="app">
      <div class="greeting">Chào hỏi và làm quen</div>
      <div class="container">
        <div class="info">
          <h1>Nguyễn Bá Tuấn Anh</h1>
          <p>
            <FontAwesomeIcon className="icon" icon={faEnvelope} /> Email:
            anh.nguyen16@codegym.vn
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faPhone} /> Số điện thoại:
            0349876595
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faChalkboardTeacher} /> Instructor, Tutor
          </p>
          <div class="skills">
            <h3>Môn giảng dạy:</h3>
            <p>HTML, CSS, JavaScript, ReactJS, SQL, Java</p>
          </div>
        </div>
        <div class="image"></div>
      </div>

      <NavButtons />
    </div>
  );
};

export default AboutMe;
