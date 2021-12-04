import React, { Component } from "react";
import "../assests/stylesheet/navbar.css"
import file from '../../src/shiveshresume.pdf';
class Navbar extends Component {
  componentDidMount() {
    let M = window.M;
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  }
  render() {
    return (
      <div id="topview"  className="sticky">
        <nav style={{zIndex: 100,paddingLeft: "25px",paddingRight: "25px", background: "#1aa79b" }}>
          <div className="nav-wrapper" id="navlinkui">
            {/* <a href="#!" className="brand-logo">
              Virekha
            </a> */}
            <a href="#mobile-demo" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                {/* <a href="#Education">Education</a> */}
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
              <li>
                <a href={file} download>Resume</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li>
            <a href="#Specialties">Specialties</a>
          </li> */}
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
          <li>
                <a href={file} download>Resume</a>
              </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
