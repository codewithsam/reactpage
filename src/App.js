import React from "react";
import { render } from "react-dom";
import "./scss/App.scss";
import HeaderWrapper from "./Components/header/HeaderWrapper";
import ChartAnalytics from "./Components/index/ChartAnalytics";
import Discovery from "./Components/index/Discovery";
import PageNavWrapper from "./Components/index/PageNavWrapper";
import SmartFilter from "./Components/index/SmartFilter";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderWrapper />
        <div className="page">
          <div className="leftpage">
            <React.Fragment>
              <SmartFilter />
              <ChartAnalytics />
              <Discovery />
            </React.Fragment>
          </div>
          <div className="rightpage">
            <PageNavWrapper />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.querySelector("#root"));
