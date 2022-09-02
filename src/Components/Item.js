import React from "react";
import TextArea from "./TextArea";
class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Item">
        <div className="itemInfo">
          <TextArea className="display" />
          <TextArea className="display" />
          <TextArea className="display" />
        </div>
        <div className="details">
          <TextArea className="display" />
          <TextArea className="display" />
        </div>
        <div className="action">
          <button className="delete">x</button>
        </div>
      </div>
    );
  }
}

export default Item;
