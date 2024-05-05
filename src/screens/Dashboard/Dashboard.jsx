import { BreadCrumb } from "../../components";

const Dashboard = () => {
  return (
    <>
      <BreadCrumb
        links={[
          { name: "Home", path: "/" },
          { name: "Dashboard", path: "/dashboard" },
        ]}
      />
      <h1>This is dashboard</h1>
    </>
  );
};

export { Dashboard };
