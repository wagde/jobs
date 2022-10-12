import React from "react";
import { Redirect, Route } from "react-router-dom";

function Protected({ component: Component, ...restOfProps }) {

    const user = restOfProps?.user;

    console.log(Component)

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        user?.user?.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default Protected;