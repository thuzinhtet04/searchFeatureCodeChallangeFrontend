import React from "react";

const ErrorComponent = ({error} : {error : string}) => {
  return (
    <p className="col-span-full text-center text-lg text-red-400">{`${
      error as string
    }`}</p>
  );
};

export default ErrorComponent;
