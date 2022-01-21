import React from 'react';
import { Link } from "react-router-dom"
import styles from "./styles.module.css"

const Navbar = () => {
  return (
      <nav className={styles.nav}>
            <div className="left">
                <div className="logo">
                    <Link to="/">eCommerce</Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                right
            </div>
             
      </nav>
  );
};

export default Navbar;
