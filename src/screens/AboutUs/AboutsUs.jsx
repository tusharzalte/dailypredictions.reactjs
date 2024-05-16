import { BreadCrumb } from "../../components";
import AnimatedTooltipPreview from "../../services/AnimatedToolComponent";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <BreadCrumb
        links={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
      />
      <div className={styles.container}>
        <h1 className="text-xl capitalize font-bold text-center">
          Meet our
          <span className={styles.caption}> exceptional team</span>
        </h1>
        <blockquote>
          <p className="hover:underline text-lg text-center font-medium hover:decoration-dashed p-10">
            "Many ideas grow better when transplanted into another mind than the
            one where they sprang up."
          </p>
        </blockquote>
        <AnimatedTooltipPreview />
      </div>
    </>
  );
};

export { AboutUs };
