import { BreadCrumb } from "../../components";
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
        <h1>here we provide model info</h1>
      </div>
    </>
  );
};

export { Models };
