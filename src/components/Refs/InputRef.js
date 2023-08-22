import React, {Component} from "react";

class InputRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  focusInput() {
    this.inputRef.current.focus();
  }
  //   componentDidMount() {
  //     // if (this.cbRef) {
  //     //   this.cbRef.focus();
  //     // }
  //     this.inputRef.current.focus();
  //     // console.log(this.inputRef);
  //   }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default InputRef;
