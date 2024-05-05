import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.css";
import { BreadCrumb } from "../../components";

const ErrorPage = () => {
  return (
    <>
      <BreadCrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Error-Page", path: "*" },
        ]}
      />
      <div className={styles.mainBody}>
        <div className={styles.componentHeading}>
          <h5 className="headingApp">Error 404</h5>
        </div>
        <div className={styles.emptyPageMsgWrapper}>
          <img
            src="https://res.cloudinary.com/dmlhtqirp/image/upload/v1714917598/LoadCast/404_Error_Page.gif"
            loading="lazy"
            alt="empty-page"
            width="40%"
          />
          <p className={styles.emptyPageMsg}>
            Something went wrong! <br /> Looks like you're lost
          </p>
          <Link to="/" className="button btn-solid-primary">
            Explore More
          </Link>
        </div>
      </div>
    </>
  );
};

export { ErrorPage };
