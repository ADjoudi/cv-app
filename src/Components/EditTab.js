import "../css/editTab.css";
import React from "react";
import InfoEditTab from "./InfoEditTab";
import WeEditTab from "./WeEditTab";

class EditTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    switch (this.props.tabType) {
      case "info":
        return (
          <InfoEditTab
            handleInputChange={this.props.handleInputChange}
            information={this.props.information}
          />
        );
      case "workExperienceItem":
        return (
          <WeEditTab
            information={this.props.information}
            handleItemInputChange={this.props.handleItemInputChange}
          />
        );
      default:
        return <div className="editTab"></div>;
    }
  }
}

export default EditTab;
