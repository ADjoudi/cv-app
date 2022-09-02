import "../css/editTab.css";

import React from "react";
import TextArea from "./TextArea";

class EditTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.tabType) {
      return <div className="editTab"></div>;
    }
    if (this.props.tabType === "info") {
      return (
        <div className="editTab">
          <form>
            <label htmlFor="fname">First Name</label>
            <TextArea id="fname" />
            <label htmlFor="lname">Last Name</label>
            <TextArea id="lname" />
            <label htmlFor="address">address</label>
            <TextArea id="address" />
            <label htmlFor="phoneNbr">051648484</label>
            <TextArea id="phoneNbr" />
            <label htmlFor="email">email</label>
            <TextArea id="email" />
          </form>
        </div>
      );
    }
    if (this.props.tabType === "wes") {
      return (
        <div className="editTab">
          <form>
            <label htmlFor="company">Company</label>
            <TextArea id="company" />
            <label htmlFor="location">Location</label>
            <TextArea id="location" />
            <label htmlFor="year">Year</label>
            <TextArea id="year" />
            <label htmlFor="title">Title</label>
            <TextArea id="title" />
            <label htmlFor="description">Description</label>
            <TextArea id="description" />
          </form>
        </div>
      );
    }
    if (this.props.tabType === "es") {
      return (
        <div className="editTab">
          <form>
            <label htmlFor="university">University</label>
            <TextArea id="university" />
            <label htmlFor="location">Location</label>
            <TextArea id="location" />
            <label htmlFor="year">Year</label>
            <TextArea id="year" />
            <label htmlFor="title">Title</label>
            <TextArea id="title" />
            <label htmlFor="description">Description</label>
            <TextArea id="description" />
          </form>
        </div>
      );
    }
  }
}

export default EditTab;
