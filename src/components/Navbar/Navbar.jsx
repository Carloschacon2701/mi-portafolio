import React, { Component } from "react";
import { DataNav } from "./DataNav";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navBar">
        <h1 className= {this.state.clicked ? "NavBar-logo active1" : "NavBar-logo" } >Develop.</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        
        <ul className={this.state.clicked ? "nav-items active" : "nav-items"}>
          {DataNav.map((dato) => {
            return (
              <li key={dato.id} className="nav-list">
                <a href={"#" + dato.title}>{dato.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
