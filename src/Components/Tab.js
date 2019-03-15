import React from "react";
import { render } from "react-dom";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
  }
  render() {
    return (
      <li
        onClick={this.props.onClick.bind(this, this.props)}
        className={
          this.props.activeTab === this.props.id ? "active" : "inactive"
        }
      >
        {this.props.title}
      </li>
    );
  }
}

export default Tab;
