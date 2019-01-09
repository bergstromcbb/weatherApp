import React from "react"
import { Link } from "react-router-dom";
import history from '../history';
import logo from '../styles/images/park.png';

class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			location: ""
		}
	}

	handleUpdate = (e) => {
		this.setState({
			location: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		document.getElementById('headerInput').value = '';
		var location = this.state.location; // cache state
		this.setState({
			location: ''
		}); // reset state		
		history.push('/forecast/' + location);
	}

	handleEnter = (e) => {
		if (e.charCode === 13) {
			this.handleSubmit(e);
		}
	}

	render() {
		return (
			<div className="main-nav">
				<div classname="logo-img">

				<Link to="/">
					<img className="bench" src={ logo } alt="weather logo"/>

					<h2 className="nav-logo">What is the weather like ....</h2>				
				</Link>

				<button type="button" className="btn header-button hidden-xs" onClick={this.handleSubmit}>Get Weather</button>
				<input type="text" className="text-input hidden-xs" placeholder="Detroit, United States" onChange={this.handleUpdate} onKeyPress={this.handleEnter} id="headerInput" />
				</div>
			</div>
		)
	}

}



export default Header