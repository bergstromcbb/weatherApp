import React from "react"

let Home = (props) => {
	return (
		<div className="input-container">
			<h1 className="input-header" id="homeHeader">Enter a City and Country</h1>
			<div className="input-controls">
				<input type="text" placeholder="Detroit, United States" className="form-control" onChange={props.onUpdate} onKeyPress={props.onEnter} />
				<button className="btn submit-button" type="button" onClick={props.onSubmit} >Get Weather</button>				
			</div>
		</div>
	)	
}

export default Home;