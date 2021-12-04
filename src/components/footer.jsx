import React, { Component } from 'react';
import '../assests/stylesheet/footer.css';

class Footer extends Component {
	state = {
		data: []
	}
	componentDidMount() {
		this.setState({ data: this.props.Personallinks })
	}
	render() {
		return (
			<div id="Footeris" className="row" >
				<div className="container" id="co">
					<div className="col m6 s12">
						<h1>Get In Touch</h1>
						<h5>{this.props.Personallinks[0]}</h5>
						<h5>{this.props.Personallinks[3]}</h5>
						<div >
							<a href={this.state.data[2]}>
								<img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" alt="github" />
							</a>
							<a href={this.state.data[1]} style={{ padding: "20px" }}>
								<img src="https://cdn.onlinewebfonts.com/svg/download_154736.png" alt="linkedin" />
							</a>
						</div>
					</div>
					<div className="col m6 s12" id="rect">
						<img src="https://i.ya-webdesign.com/images/designer-vector-developer-3.png" alt="contact"></img>
					</div>
				</div>
			</div>
		)
	}
}
export default Footer;
