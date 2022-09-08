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
            handleHeaderInputChange={this.props.handleHeaderInputChange}
            headerInfo={this.props.headerInfo}
          />
        );
      case "workExperienceItem":
        return (
          <WeEditTab
            workExpList={this.props.workExpList}
            workExpItemIndex={this.props.workExpItemIndex}
            handleItemInputChange={this.props.handleItemInputChange}
          />
        );
      default:
        return <div className="editTab"></div>;
    }
  }
}

export default EditTab;
