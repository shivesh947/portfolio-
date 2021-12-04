import React,{Component} from 'react';
import '../assests/stylesheet/mockups.css';

class Mockup extends Component{
    state={
        mockups:[],
        loding:false
    }
    componentDidMount(){
        let M = window.M;
        var elems = document.querySelectorAll(".parallax");
        var instances = M.Parallax.init(elems, {});     
       

        this.setState({mockups:this.props.mockupdata})
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }
          topFunction()
    }
 
    render(){
        // const listItems = this.state.mockups.map((mock,index)  => (
        //     <div className="col m6 s12" id="mockup">
        //     {/* <div className="col m3 s0"></div> */}
        //     <div className="col m12 s12" id={"cl"}><img key={index} src={mock.imagelink}></img></div>
        //      {/* <div className="col m3 s0"><h2>{this.props.mockupdata[index].name}</h2></div> */}
        //      </div>
        //     ));

              const listItems = this.state.mockups.map((mock,index)  => (
                  <div className='col s12 m6 stickyp'>
                           <img key={index}  className='col s12' src={this.props.mockupdata[index].imagelink}></img>
                  </div>
                ));
                const listli = this.state.mockups.map((mock,index)  => (
                             <img key={index} className="mySlides" src={this.props.mockupdata[index].imagelink} style={{width:"100%"}}/>
                  ));
let myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) 
  {myIndex = 1}    
  if(x[myIndex-1])
  {
    x[myIndex-1].style.display = "block";  
  }
  setTimeout(carousel, 2000);
}

        return(
              <div className="row" id="mockk">
                  <div id="asasas"  className="hide-on-small-only">
                        <div>
                        <div className='parallax-container'>
                            <div className='parallax'><img src={this.props.mockupdata[0].imagelink}/></div>
                        </div>
                        <div>
                            <img src={this.props.mockupdata[1].imagelink}/>
                        </div>
                        </div>

                        <div>
                            
                        <div className='parallax-container'>
                            <div className='parallax'><img src={this.props.mockupdata[2].imagelink}/></div>
                        </div>
                        <div>
                            <img src={this.props.mockupdata[3].imagelink}/>
                        </div>
                        </div>
                 </div>
                        <div className="w3-content w3-section">
                        {listli}
                   </div>
                    <div>
                    {listItems}
                    </div>

            </div>
        )
    }
}
export default Mockup;
