import React, { Component } from "react";

import "../assests/stylesheet/projectcase.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom"; 

class Uiprojectcase extends Component {
  componentDidMount() {
    let M = window.M;
    var elems2 = document.querySelectorAll('.tooltipped');
    var instances2 = M.Tooltip.init(elems2, {});
    AOS.init();
  }

  render() {
    const mystyle={
        marginBottom:"20px",
        borderRadius:"10%"
    }
    const numbers = this.props.projectdata.slice(0, 4);
    const listItems = numbers.map((number,index)  => (
                <img className='col s12 m6' src={number.imagelink} key={index}  data-aos="flip-right" data-aos-duration="2000" style={mystyle} alt={`li${index}`}/>
    ));
    return (
      <div >
         <center> <h2 style={{color:"white"}}>UI PROJECT</h2></center>
        <div className="row"  data-aos="fade-right" style={{padding:"35px"}}>
            <div className="col s12 m12">
            {listItems}
            </div>
        </div>
        <br></br>
        <br/>
        <center>
        <Link  to="/mockups">
        <div className="box">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </Link>
        </center>


      </div>
    );
  }
}
export default Uiprojectcase;
