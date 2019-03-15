import React from "react";
import { render } from "react-dom";
import logo from "./../../assets/logo.png";

class HeaderWrapper extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header">
          <div className="header__logo header__item">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__search header__item">
            <div className="header__search__input">
              <input
                type="text"
                placeholder="Search for companies, people & investors"
              />
              <i className="fas fa-search" />
            </div>
          </div>
          {/* TODO: Wrap log user dropdown in a tag to make it clickable */}
          <div className="header__loguser  header__item">
            <div className="header__userdrop">
              <div className="header__userdrop__item">
                <img src="http://i.pravatar.cc/32" alt="Img" />
              </div>
              <div className="header__userdrop__item header__userdrop__username">
                <span>Mrinalini Saha</span>
                <i className="fas fa-sort-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderWrapper;
