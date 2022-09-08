import "../css/editTab.css";
import React from "react";

class WeEditTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let workExpItemIndex = this.props.workExpItemIndex;
    let workExpList = this.props.workExpList;
    let information = workExpList[workExpItemIndex];
    if (information == null) {
      return <div className="editTab"></div>;
    } else {
      let { company, location, years, title, description } = information;
      return (
        <div className="editTab">
          <form onChange={this.props.handleItemInputChange}>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              defaultValue={company}
              index={workExpItemIndex}
            />
            <label htmlFor="location">Location</label>
            <input
              id="location"
              defaultValue={location}
              index={workExpItemIndex}
            />
            <label htmlFor="years">Years</label>
            <input id="years" defaultValue={years} index={workExpItemIndex} />
            <label htmlFor="title">Title</label>
            <input id="title" defaultValue={title} index={workExpItemIndex} />
            <label htmlFor="description">Description</label>
            <input
              id="description"
              defaultValue={description}
              index={workExpItemIndex}
            />
          </form>
        </div>
      );
    }
  }
}

export default WeEditTab;
