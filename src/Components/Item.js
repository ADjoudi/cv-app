import React from "react";
import "../css/item.css";
import uniqid from "uniqid";
class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { company, location, years, title, description } =
      this.props.information;
    return (
      <div
        className="item"
        onClick={this.props.handleWorkExperienceItemClick}
        idkey={this.props.idkey}
      >
        <div className="itemInfo">
          <h1>{company}</h1>
          <h2>{location}</h2>
          <h2>{years}</h2>
        </div>
        <div className="point"></div>
        <div className="details">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <div className="action">
          <button className="delete">x</button>
        </div>
      </div>
    );
  }
}

export default Item;
