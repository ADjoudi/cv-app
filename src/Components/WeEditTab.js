import "../css/editTab.css";
import React from "react";

class WeEditTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { company, location, years, title, description } =
      this.props.information;
    return (
      <div className="editTab">
        <form onChange={this.props.handleItemInputChange}>
          <label htmlFor="company">CXompany</label>
          <input id="company" defaultValue={company} />
          <label htmlFor="location">Location</label>
          <input id="location" defaultValue={location} />
          <label htmlFor="years">Years</label>
          <input id="years" defaultValue={years} />
          <label htmlFor="title">Title</label>
          <input id="title" defaultValue={title} />
          <label htmlFor="description">Description</label>
          <input id="description" defaultValue={description} />
        </form>
      </div>
    );
  }
}

export default WeEditTab;
