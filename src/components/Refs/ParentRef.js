import React, {Component} from "react";
import InputRef from "./InputRef";

class ParentRef extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }
  focusInput = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <InputRef ref={this.componentRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default ParentRef;
