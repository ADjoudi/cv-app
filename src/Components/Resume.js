import "../css/resume.css";
import React from "react";
import TextArea from "./TextArea.js";
import Item from "./Item";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "First Name",
      lName: "Last Name",
      address: "651 rowing street , BC",
      phoneNbr: "0216489486",
      email: "abdou@gmail.com",
      wes: [],
      es: [],
    };
  }
  render() {
    return (
      <div className="resume">
        <form>
          <header id="info" onClick={() => this.props.tabType("info")}>
            <div>
              <TextArea className="fName display" value="Abdelouahab" />
              <TextArea className="lName display" value="Djoudi" />
            </div>
            <div>
              <TextArea className="info display" value="Address" />
              <TextArea className="info display" value="0531564" />
              <TextArea className="info display" value="email" />
            </div>
          </header>
          <div
            id="workE"
            className="workExperience"
            onClick={() => this.props.tabType("wes")}
          >
            <header>
              <h1>WORK EXPERIENCE</h1>
              <button className="addBtn">add</button>
            </header>
            <div className="weItems">
              <Item />
            </div>
          </div>
          <div
            id="education"
            className="education"
            onClick={() => this.props.tabType("es")}
          >
            <header>
              <h1>EDUCATION</h1>
              <button className="addBtn">add</button>
            </header>
            <div className="eItems">
              <Item />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Resume;
