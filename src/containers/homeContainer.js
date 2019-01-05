import React from 'react';
import Home from "../components/home";

class HomeContainer extends React.Component {

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
		var location = this.state.location; // cache state
		this.setState({
			location: ''
		}); // reset state		
		this.props.history.push('/forecast/' + location);
	}

	handleEnter = (e) => {
		if (e.charCode === 13) {
			this.handleSubmit(e);
		}
	}

	render() {
		return (
			<Home onSubmit={this.handleSubmit} onUpdate={this.handleUpdate} onEnter={this.handleEnter} />
		)
	}
}

export default HomeContainer