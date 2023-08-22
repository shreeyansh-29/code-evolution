import React from "react";
import {UserConsumer} from "./userContext";

function ComponentF() {
  return (
    <UserConsumer>
      {(username) => {
        return <h2>Hello {username}</h2>;
      }}
    </UserConsumer>
  );
}

export default ComponentF;
