import React from "react";
import "../css/app.css";
import Resume from "./Resume";
import EditTab from "./EditTab";

let itemInfo = {
  company: "company",
  location: "location",
  years: "years",
  title: "title",
  description: "description",
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabType: null,
      headerInfo: {
        fName: "First Name",
        lName: "Last Name",
        address: "651 rowing street , BC",
        phoneNbr: "0216489486",
        email: "abdou@gmail.com",
      },
      tabID: null,
      workExpList: [],
    };
    this.handleTab = this.handleTab.bind(this);
    this.handleHeaderInputChange = this.handleHeaderInputChange.bind(this);
    this.handleAddWorkExperienceBtnClick =
      this.handleAddWorkExperienceBtnClick.bind(this);
    this.handleWorkExperienceItemClick =
      this.handleWorkExperienceItemClick.bind(this);
    this.handleItemInputChange = this.handleItemInputChange.bind(this);
  }
  handleTab(event) {
    this.setState(
      {
        //unmount tab
        tabType: null,
      },
      () => {
        //mount tab
        this.setState({ tabType: event });
      }
    );
  }
  handleHeaderInputChange(event) {
    console.log(event.target);
    let id = event.target.id;
    let value = event.target.value;
    let headerInfo = this.state.headerInfo;
    this.setState({ headerInfo: { ...headerInfo, [id]: value } });
  }

  handleAddWorkExperienceBtnClick(event) {
    event.preventDefault();
    this.setState({
      tabType: null,
      workExpList: this.state.workExpList.concat(itemInfo),
    });
  }

  handleWorkExperienceItemClick(event) {
    console.log(event.currentTarget);
    this.setState(
      {
        tabID: event.currentTarget.getAttribute("idkey"),
      },
      () => {
        this.handleTab("workExperienceItem");
      }
    );
  }
  handleItemInputChange(event) {
    let id = event.target.id;
    let value = event.target.value;
    let itemIndex = parseInt(event.target.getAttribute("index"));
    console.log(event.target);
    this.setState((prevState) => ({
      workExpList: prevState.workExpList.map((item, index) =>
        index === itemIndex ? (item = { ...item, [id]: value }) : item
      ),
    }));
  }
  render() {
    return (
      <div className="App">
        <Resume
          tabType={this.handleTab}
          headerInfo={this.state.headerInfo}
          workExpList={this.state.workExpList}
          handleAddWorkExperienceBtnClick={this.handleAddWorkExperienceBtnClick}
          handleWorkExperienceItemClick={this.handleWorkExperienceItemClick}
        />
        <EditTab
          tabType={this.state.tabType}
          handleHeaderInputChange={this.handleHeaderInputChange}
          handleItemInputChange={this.handleItemInputChange}
          headerInfo={this.state.headerInfo}
          workExpList={this.state.workExpList}
          workExpItemIndex={this.state.tabID}
        />
      </div>
    );
  }
}

export default App;
