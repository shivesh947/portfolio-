import React, { Component } from "react";
import projectlogo from "../assests/images/projectlogo.svg";

import "../assests/stylesheet/projectcase.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom"; 

class Projectcase extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    const numbers = this.props.projectdata.slice(0, 4);
    const listItems = numbers.map((number,index)  => (

    <div className="col m3 s12" key={index}  data-aos="flip-right" data-aos-duration="2000">
      <div className="row " id="projectcard">
        <div className="col s12 procard" >
          <div className="card">
            <div className="card-image">
              <img src={number.imageLink} alt={`img${index}`}/>
            </div>
            {/* <span className="card-title">{number.Name}</span> */}
            <div className="card-content" style={{minHeight: "215px"}}>
              <h5>{number.Name}</h5>
              <p>
                {number.shortdescription}
              </p>
            </div>
            <div className="card-action">
            {number.livelink ?(
              <a href={number.livelink} style={{fontSize:"20px"}}>Live </a>
            ):
            <span></span>
            }
            {number.gitlink ?(
              <a href={number.gitlink}  style={{fontSize:"20px"}}>Git Link</a>
            ):
            <span></span>
            }              
            </div>
          </div>
        </div>
        </div>
      </div>
    ));
    // console.log(listItems);
    return (
      <div className="container">
        <div className="row" data-aos="fade-right">
            <div className="col12">
            <center>
          <img  src={projectlogo} id="projectlogo" />
        </center>
            </div>
            <center> <h3 style={{color:"white"}}>FULL STACK PROJECT</h3></center>
        </div>
        
        <div className="row"  data-aos="fade-right">
        {listItems}
        </div>
        <br></br>
        <br/>
        <center>
        <Link  to="/projects">
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
export default Projectcase;
