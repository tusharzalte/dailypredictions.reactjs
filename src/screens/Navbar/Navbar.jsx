import { NavLink, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {

  const navigate = useNavigate();

  const getNavStyle = ({ isActive }) => {
    const outputClass = styles.navlinks;
    return isActive ? `${outputClass} ${styles.active}` : `${outputClass}`;
  };

  return (
    <div className={styles.navbar}>
      <NavLink className={styles.mainLink} to="/">
        <span className={styles.nomenclature}>
          Load<span className={styles.product}>Cast</span>
        </span>
      </NavLink>

      <div className={styles.navigators}>
        <NavLink className={getNavStyle} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className={getNavStyle} to="/models">
          Model-Info
        </NavLink>
        <NavLink className={getNavStyle} to="/about">About Us</NavLink>
      </div>
    </div>
  );
};

export { Navbar };

