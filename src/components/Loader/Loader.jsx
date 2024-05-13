import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <Oval
        height={50}
        width={50}
        color="#f43f5e"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ff3860"
        strokeWidth={4}
      />
    </>
  );
};

export { Loader };