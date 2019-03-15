import React from "react";
import { render } from "react-dom";
import Tab from "./Tab";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
    this.defaultFilter = React.createRef();
  }
  componentDidMount = _ => {
    this.setState({
      content: this.defaultFilter.current.props.children
    });
  };
  onClickTabItem = tabProps => {
    this.setState({
      activeTab: tabProps.id,
      content: tabProps.children
    });
  };
  render() {
    return (
      <React.Fragment>
        <ul className="filter-tabs tabs">
          <Tab
            ref={this.defaultFilter}
            title="Company"
            onClick={this.onClickTabItem}
            id="t1"
            activeTab={this.state.activeTab}
          >
            <button className="badge badge--md badge--borderless badge--text-left badge--round badge--colored badge--pink">
              Profile
            </button>
            <button className="badge badge--md badge--borderless badge--text-left badge--round badge--colored badge--orange">
              Comparables
            </button>
            <button className="badge badge--md badge--borderless badge--text-left badge--round badge--colored badge--green">
              Strategic gaps
            </button>
            <button className="badge badge--md badge--borderless badge--text-left badge--round badge--colored badge--red">
              Potential acqurers
            </button>
            <button className="badge badge--md badge--borderless badge--text-left badge--round badge--colored badge--blue">
              Fast path
            </button>
            <div className="panel">
              <div className="panel__item">
                <p>
                  What are the most critical strategic gaps for a company across
                  its portfolio ?
                </p>
              </div>
              <div className="panel__item">
                <p>
                  What are the most critical strategic gaps for a company across
                  its portfolio ?
                </p>
              </div>
              <div className="panel__item">
                <p>
                  What are the most critical strategic gaps for a company across
                  its portfolio ?
                </p>
              </div>
              <div className="panel__item">
                <p>
                  What are the most critical strategic gaps for a company across
                  its portfolio ?
                </p>
              </div>
              <div className="panel__item">
                <p>
                  What are the most critical strategic gaps for a company across
                  its portfolio ?
                </p>
              </div>
              <div className="panel__item">
                <p>
                  What are the most critical strategic gaps for a company across
                  its portfolio ?
                </p>
              </div>
            </div>
          </Tab>
          <Tab
            title="Investor"
            onClick={this.onClickTabItem}
            activeTab={this.state.activeTab}
            id="t2"
          >
            <h1>TAB 2</h1>
          </Tab>
          <Tab
            title="Person"
            onClick={this.onClickTabItem}
            activeTab={this.state.activeTab}
            id="t3"
          >
            <h1>TAB 3</h1>
          </Tab>
          <Tab
            title="Sector"
            onClick={this.onClickTabItem}
            activeTab={this.state.activeTab}
            id="t4"
          >
            <h1>TAB 4</h1>
          </Tab>
          <Tab
            title="Industry"
            onClick={this.onClickTabItem}
            activeTab={this.state.activeTab}
            id="t5"
          >
            <h1>TAB 5</h1>
          </Tab>
          <Tab
            title="Sub-industry"
            onClick={this.onClickTabItem}
            activeTab={this.state.activeTab}
            id="t6"
          >
            <h1>TAB 6</h1>
          </Tab>
          <Tab
            title="Region"
            onClick={this.onClickTabItem}
            activeTab={this.state.activeTab}
            id="t7"
          >
            <h1>TAB 7</h1>
          </Tab>
        </ul>
        <div className="tab-content">{this.state.content}</div>
      </React.Fragment>
    );
  }
}

export default Tabs;
