import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  render() {
    return (
      <input
        id={this.props.id}
        className={this.props.className}
        type="text"
        onChange={this.handleInputChange}
        value={this.props.value}
      />
    );
  }
}

export default TextArea;
