import React from "react";
import logo from "./VectorSmart.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <img src={logo} alt="VectorSmart" />
      </div>
      <nav>
        <ul>
          <li>
            <select>
              <option>PRODUCTS</option>
              <option>ABC</option>
              <option>DEF</option>
            </select>
          </li>
          <li>
            <a className={classes.pages} href="#resources">
              Resources
            </a>
          </li>
          <li>
            <a className={classes.pages} href="#resources">
              About us
            </a>
          </li>
          <li>
            <a className={classes.pages} href="#Knowledge Center">
              Knowledge Center
            </a>
          </li>
          <li>
            <a className={classes.pages} href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
