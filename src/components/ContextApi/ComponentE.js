import React from "react";
import ComponentF from "./ComponentF";
import userContext from "./userContext";

class ComponentE extends React.Component {
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}
ComponentE.contextType = userContext;

export default ComponentE;
