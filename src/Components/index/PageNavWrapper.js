import React from "react";
import { render } from "react-dom";

class PageNavWrapper extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__item">
          <div className="nav__item__header">
            <i className="fas fa-chart-pie" />
            <div>
              <h3>Find strategic gaps</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div className="nav__item__controller">
            <input type="text" placeholder="Search A Company" />
            <i className="fas fa-chevron-right" />
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__header">
            <i className="fas fa-chart-pie" />
            <div>
              <h3>Find strategic gaps</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div className="nav__item__controller">
            <input type="text" placeholder="Search A Company" />
            <i className="fas fa-chevron-right" />
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__header">
            <i className="fas fa-chart-pie" />
            <div>
              <h3>Find strategic gaps</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div className="nav__item__controller">
            <input type="text" placeholder="Search A Company" />
            <i className="fas fa-chevron-right" />
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__header">
            <i className="fas fa-chart-pie" />
            <div>
              <h3>Find strategic gaps</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div className="nav__item__controller">
            <input type="text" placeholder="Search A Company" />
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default PageNavWrapper;
