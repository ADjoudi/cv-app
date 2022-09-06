import "../css/editTab.css";
import React from "react";

class EducationEditTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="editTab">
        <form>
          <label htmlFor="university">University</label>
          <input id="university" />
          <label htmlFor="location">Location</label>
          <input id="location" />
          <label htmlFor="year">Year</label>
          <input id="year" />
          <label htmlFor="title">Title</label>
          <input id="title" />
          <label htmlFor="description">Description</label>
          <input id="description" />
        </form>
      </div>
    );
  }
}

export default EducationEditTab;
