import React from 'react';
import getDate from '../utils/getDate.js';
import tempConverter from '../utils/tempConverter.js';

let Detail = (props) => {
	var icon = props.forecast.list[props.id].weather[0].icon;

	return (
		<div className="container text-center">
			<div className="detail-location-header">{props.forecast.city.name + ', ' + props.forecast.city.country}</div>			
			<img style={{ width: "150px" }} alt="weather" src={`http://openweathermap.org/img/w/${icon}.png`} />
			<div className="date-text">{getDate(props.id)}</div>
			<div className="description-text">
				<div>{props.forecast.list[props.id].weather[0].description}</div>
				<div>min temp: {tempConverter(props.forecast.list[props.id].main.temp_min)}</div>
				<div>max temp: {tempConverter(props.forecast.list[props.id].main.temp_max)}</div>
				<div>humidity: {props.forecast.list[props.id].main.humidity}</div>
			</div>
		</div>
	)
}

export default Detail;