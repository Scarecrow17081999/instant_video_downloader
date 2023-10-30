import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots
        radius="9"
        color="#00000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
