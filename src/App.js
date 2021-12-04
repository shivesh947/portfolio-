import React, { Component } from "react";
import "./App.css";
import Skillpage from "./components/skillpage";
import Navbar from "./components/navbar";
import Firstpage from "./components/firstpage";
import About from "./components/about";
import Projectcase from "./components/projectcase";
import Uiprojectcase from "./components/uiprojectcase";

import Allproject from "./components/Allproject";
import Footer from "./components/footer";
// import Educationdata from "./components/educationdata";
// import Floatingnavbutton from "./components/flotingbutton";
import Mockup from "./components/uiuxmockup";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { APIdata } from './db';

import "./assests/stylesheet/myanimation.css";


class App extends Component {
  state = {
    loading: true,
    person: null
  };
  componentDidMount() {
    this.setState({ person: APIdata.persondata, loading: false });
  }

  render() {
	const { loading, person } = this.state || {};
	const {  aboutus, skill, projects, mockups } = person || {};

    return (
      <div className="App">
        <div>
          {loading ? (
            <div id="loader">
              <center>
              <div className="preloader-wrapper big active" id="loaderis">
              
                <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                    <div className="circle"> </div>
                  </div>
                  <div className="gap-patch">
                    <div className="circle"> </div>
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle"> </div>
                  </div>
                </div>
              </div>
              </center>

            </div>
          ) : (
            <div>
              <Router>
                <Switch>
                  <Route path="/" exact>
                    

                    <div className="row" id="home">
                      <Firstpage />
                    </div>
                    <Navbar />
                    <div className="row" id="about">
                      <About aboutdata={aboutus} />
                    </div>
                    <div className="row " id="Skills">
                      <Skillpage skilldata={skill} />
                    </div>
                    <div className="row" id="Portfolio">
                      <Projectcase projectdata={projects} />
                      <br/>
                      <br/>
                      <Uiprojectcase projectdata={mockups} />
                      <br/>
                      <br/>
                    </div>
                    <div className="row " id="footer" >
                      <Footer Personallinks={aboutus[0].Personallinks} />
                    </div>
                  </Route>

                  <Route path="/projects">
                    <Allproject projectdata={projects} />
                  </Route>
                  <Route path="/mockups">
                    <Mockup mockupdata={mockups} />
                  </Route>
                </Switch>
              </Router>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;