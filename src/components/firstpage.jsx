import React, { Component } from "react";
import "../assests/stylesheet/firstpage.css";
import back1svg from "../assests/images/back1svg.svg";

class Firstpage extends Component {
  render() {
    return (
      // style={{backgroundImage: `url(${back1svg})` }}
      <div id="firstpage" className="row">
        <div id="fione" className="col m5 s5">
          <div>
            <h3 className="fontdo" data-aos="fade-up" data-aos-duration="3000">
              <b>
                Hello, I'm SHIVESH GUPTA
                <br />
                I'm a Front End developer. <br />
              </b>
            </h3>
          </div>
        </div>
        <div id="fitwo" className="col m7 s7"></div>
      </div>
    );
  }
}
export default Firstpage;
