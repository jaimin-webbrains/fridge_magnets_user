import React, { Fragment } from "react";

export const ProtectedRoute = ({ authData, children }) => {
  return (
    <div>
      {/* {authData.isLogin ? (
                <Fragment>{children}</Fragment>
            ) : (
                <Redirect to={"/login"} />
            )} */}
      <Fragment>{children}</Fragment>
    </div>
  );
};
