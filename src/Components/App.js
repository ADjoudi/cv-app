import React from "react";
import "../css/app.css";
import Resume from "./Resume";
import EditTab from "./EditTab";
import Item from "./Item";
import uniqid from "uniqid";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabType: null,
      fName: "First Name",
      lName: "Last Name",
      address: "651 rowing street , BC",
      phoneNbr: "0216489486",
      email: "abdou@gmail.com",

      tabID: null,
      idkey: 0,
      company: "company",
      location: "location",
      years: "years",
      title: "title",
      description: "description",
      wes: [],

      es: [],
    };
    this.handleTab = this.handleTab.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddWorkExperienceBtnClick =
      this.handleAddWorkExperienceBtnClick.bind(this);
    this.handleWorkExperienceItemClick =
      this.handleWorkExperienceItemClick.bind(this);
    this.handleItemInputChange = this.handleItemInputChange.bind(this);
  }
  handleTab(event) {
    this.setState({
      tabType: event,
    });
  }
  handleInputChange(event) {
    const id = event.target.id;
    this.setState({
      [id]: event.target.value,
    });
  }
  handleItemInputChange(event) {
    this.handleInputChange(event);
    let id = event.target.id;
    let value = event.target.value;
    this.setState(
      (prevState) => {
        console.log(prevState);
        let newState = Object.assign({}, prevState);
        newState.wes[this.state.tabID].props.information[id] = value;
        return { newState };
      },
      () => {
        console.log(this.state.wes[this.state.tabID].props.information);
      }
    );
  }

  handleAddWorkExperienceBtnClick(event) {
    event.preventDefault();
    this.setState(
      {
        tabType: null,
        wes: this.state.wes.concat(
          <Item
            key={this.state.idkey}
            idkey={this.state.idkey}
            handleItemClick={this.handleWorkExperienceItemClick}
            information={this.state}
          />
        ),
      },
      () => {
        this.setState({ idkey: this.state.idkey + 1 });
      }
    );
  }
  handleWorkExperienceItemClick(event) {
    this.render();
    this.handleTab("workExperienceItem");
    this.setState(
      {
        tabID: event.currentTarget.getAttribute("idkey"),
      },
      () => {
        let { building, location, years, title, description } =
          this.state.wes[this.state.tabID].props.information;
        this.setState({
          building: building,
          location: location,
          years: years,
          title: title,
          description: description,
        });
      }
    );
    console.log(this.state.wes);
  }
  render() {
    return (
      <div className="App">
        <Resume
          tabType={this.handleTab}
          information={this.state}
          handleAddWorkExperienceBtnClick={this.handleAddWorkExperienceBtnClick}
        />
        <EditTab
          tabType={this.state.tabType}
          handleInputChange={this.handleInputChange}
          handleItemInputChange={this.handleItemInputChange}
          information={this.state}
        />
      </div>
    );
  }
}

export default App;
