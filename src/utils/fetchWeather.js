import axios from 'axios';

function fetchWeather (location, callback) {
	axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=92c716ad45b03948aeee52d1ad4d8b42&cnt=5`)
	.then(function(res) {
		return callback(res.data);
	})
	.catch(function(err) {
		return console.warn('Error in fetchWeather: ', err)
	});
} // return 5 day forecast


export default fetchWeather;