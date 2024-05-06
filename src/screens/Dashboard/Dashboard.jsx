
import { DashboardForm } from "../../components";
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
      <DashboardForm />
    </>
  );
};

export { Dashboard };
