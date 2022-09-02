import React from "react";
import "../css/app.css";
import Resume from "./Resume";
import EditTab from "./EditTab";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabType: "",
    };
    this.handleTab = this.handleTab.bind(this);
  }
  handleTab(event) {
    console.log(event);
    this.setState({
      tabType: event,
    });
  }
  render() {
    return (
      <div className="App">
        <Resume tabType={this.handleTab} />
        <EditTab tabType={this.state.tabType} />
      </div>
    );
  }
}

export default App;
