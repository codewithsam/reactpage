import React from "react";
import { render } from "react-dom";
import Tabs from "./../Tabs";
class SmartFilter extends React.Component {
  render() {
    return (
      <div className="filter-wrapper">
        <h3>Choose from our smart filters</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <Tabs activeTab="t1" />
      </div>
    );
  }
}

export default SmartFilter;
