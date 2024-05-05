import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

import styles from "./BreadCrumb.module.css";

const BreadCrumb = ({ links }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumbList}>
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <li className={styles.breadcrumbItem}>
              <Link
                to={item.path}
                title={item.name}
                className={
                  i === links.length - 1 ? styles.active : styles.breadcrumbLink
                }
              >
                {item.name}
              </Link>
            </li>
            {i < links.length - 1 && (
              <li>
                <IoIosArrowUp className={styles.breadcrumbIcon}/>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export { BreadCrumb };