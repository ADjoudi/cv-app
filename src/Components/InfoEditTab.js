import "../css/editTab.css";
import React from "react";

class InfoEditTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { fName, lName, address, phoneNbr, email } = this.props.headerInfo;
    return (
      <div className="editTab">
        <form onChange={this.props.handleHeaderInputChange}>
          <label htmlFor="fName">First Name</label>
          <input id="fName" defaultValue={fName} />
          <label htmlFor="lName">Last Name</label>
          <input id="lName" defaultValue={lName} />
          <label htmlFor="address">Address</label>
          <input id="address" defaultValue={address} />
          <label htmlFor="phoneNbr">Phone Number</label>
          <input id="phoneNbr" defaultValue={phoneNbr} />
          <label htmlFor="email">Email</label>
          <input id="email" defaultValue={email} />
        </form>
      </div>
    );
  }
}

export default InfoEditTab;
