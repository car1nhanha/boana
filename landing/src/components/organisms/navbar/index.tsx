import { useState } from "react";
import logo from "../../../assets/boana.png";
import styles from "./navbar.module.scss";

export const NavbarComponent = () => {
  const [selected, setSelected] = useState("services");

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Boana Logo" />
          <h1>Boana</h1>
        </div>
        <ul className={styles.navLinks}>
          <li className={selected === "services" ? styles.selected : ""} onClick={() => setSelected("services")}>
            <a href="#services">Services</a>
          </li>
          <li className={selected === "creators" ? styles.selected : ""} onClick={() => setSelected("creators")}>
            <a href="#creators">Creators</a>
          </li>
          <li className={selected === "doc" ? styles.selected : ""} onClick={() => setSelected("doc")}>
            <a href="#doc">Documentation</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
