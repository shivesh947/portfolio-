import React, { Component } from "react";
import '../assests/stylesheet/about.css'
import aboutlogo from '../assests/images/aboutme.svg'
class About extends Component {

 componentDidMount(){
  var i=0,linkdata='';
  for(i=0;i<this.props.aboutdata[0].links.length;i++)
  {
    var datais=this.props.aboutdata[0].links[i];
    linkdata="<div classame='col s6'><div className='row' style='padding:10px'><div classame='col s12'>"+datais.type+"</div><div classame='col s12'><a href="+datais.url+">Click here</a></div></div></div>"+linkdata;
  }
  document.getElementById('linkdata').innerHTML=linkdata;
 }

  render() {
    return (
      <div id="about" className="aboutch"  data-aos="slide-right" >
        <div className="container">
        <div className="row">
         <center><img src={aboutlogo} data-aos="zoom-in-up"  id="aboutlogo"/></center>

         <div className="col s12 m4" id="insidecard">
            <div className="card">
            <center>
              <div className="card-image" id="mypic">
                <img src={this.props.aboutdata[0].imageLink} />
                <span className="card-title">
                  {this.props.aboutdata[0].heading}
                </span>
              </div>
              {/* <div className="card-content">
               
               <h4>
               <p data-aos="zoom-out-right">{this.props.aboutdata[0].Name}</p>
              <p>{this.props.aboutdata[0].developertype}</p>
               </h4>
              </div> */}
              </center>
            </div>
          </div>

          <div className="col s12 m5">
          <p id="dis">{this.props.aboutdata[0].description}</p>
          </div>
          <div className="col s12 m3">
          <p id="edis">{this.props.aboutdata[0].Email}</p>
          <p id="pdis">{this.props.aboutdata[0].Phonenumber}</p>
          <div className="row" id="linkdata">
          </div>
          </div>
        </div>
        </div>
     
      </div>
    );
  }
}
export default About;
