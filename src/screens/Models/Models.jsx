import { BreadCrumb } from "../../components";
import StickyScrollRevealDemo from "../../services/StickyComponent";
import styles from "./Models.module.css";

const Models = () => {
  return (
    <>
      <BreadCrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Model-Information", path: "/models" },
        ]}
      />
      <div className={styles.main}>
        <StickyScrollRevealDemo />
      </div>
    </>
  );
};

export { Models };
