import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const NavElements = [
  { namePage: "Главная", href: "" },
  { namePage: "Бронирование", href: "/booking" },
  { namePage: "Личный кабинет", href: "/personal" },
];

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="">
        <img src="Logo.webp" alt="logo" className={styles.logo} />
      </NavLink>
      <nav className={styles.navBar}>
        {NavElements.map(({ namePage, href }) => (
          <NavLink className={styles.navElement} to={href}>
            {namePage}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
