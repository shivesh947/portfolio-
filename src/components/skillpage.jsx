import React, { Component } from "react";
import Skillbar from "./skillbar";
import '../assests/stylesheet/skillpage.css'
import skilllogo from "../assests/images/skilllogo.svg"
import uiux from "../assests/images/UIUX.svg"
import fulls from "../assests/images/fulls.svg"

import { Link } from "react-router-dom";


class Skillpage extends Component{
    render() {
        return (
            <div className="container">
                <center><img src={skilllogo} id="skilllogo" data-aos="fade-right" alt="skilllogo"/></center>
                <div className="row">
                    <center>
                    <div className="col m6 s6" data-aos="fade-right"  data-aos-duration="1500">
                        <Link to="/mockups"><img id="ims" src={uiux} alt="uiuxlogo" /></Link>
                    </div>
                    <div className="col m6 s6" >
                    <Link  to="/projects">
                        <img id="ims" src={fulls}></img>
                    </Link>
                    {/* data-aos="fade-left"  data-aos-duration="1500" */}
                    </div>
                    </center>
                </div>
                {/* <div className="col m6 s12" >jsnjdk</div> */}
                <Skillbar
                  className="col m12 s12"
                  skilldata={this.props.skilldata}
                />
               </div>
        )
    }
}
export default Skillpage;
 
