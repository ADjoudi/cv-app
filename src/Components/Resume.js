import "../css/resume.css";
import React from "react";
import Item from "./Item";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { fName, lName, address, phoneNbr, email, wes } =
      this.props.information;
    return (
      <div className="resume">
        <form>
          <header id="info" onClick={() => this.props.tabType("info")}>
            <div>
              <h1 className="fName display">{fName}</h1>
              <h1 className="lName display">{lName}</h1>
            </div>
            <div>
              <h2 className="info display">{address}</h2>
              <h2 className="info display">{phoneNbr}</h2>
              <h2 className="info display">{email}</h2>
            </div>
          </header>

          <div id="workE" className="section">
            <header>
              <h1>WORK EXPERIENCE</h1>
              <button
                className="addBtn"
                onClick={this.props.handleAddWorkExperienceBtnClick}
              >
                add
              </button>
            </header>
            <div className="items">{wes}</div>
          </div>

          <div id="education" className="section">
            <header>
              <h1>EDUCATION</h1>
              <button className="addBtn">add</button>
            </header>
            <div className="items"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Resume;
