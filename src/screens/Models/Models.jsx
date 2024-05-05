import { BreadCrumb } from "../../components";

const Models = () => {
  return (
    <div>
      <BreadCrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Model-Information", path: "/models" },
        ]}
      />
      <h1>here we provide model info</h1>
    </div>
  );
};

export { Models };
