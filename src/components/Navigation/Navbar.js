import React from "react";
import styles from "./Navbar.module.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

import display_pic from "../../assets/guy.png";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <FaFacebookSquare
          className={styles.logo_icon}
          color="#4267B2"
          size="2.25em"
        />
      </div>

      <div className={styles.navlinks}>
        <FaHome className={styles.active_icon} color="#4267B2" size="2.25em" />
        <FaVideo className={styles.nav_icon} color="grey" size="2.25em" />
        <FaGamepad className={styles.nav_icon} color="grey" size="2.25em" />
      </div>
      <div className={styles.profile}>
        <img src={display_pic} alt="display" />
        <p>Suraj Katyayan</p>
        <FaAngleDown className={styles.dropdown} color="#616771" size="1.8em" />
      </div>
    </div>
  );
};

export default Navbar;
