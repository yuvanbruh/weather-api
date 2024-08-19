const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		const response = JSON.parse(this.responseText);

		// Parsing the response
		const location = response.location;
		const current = response.current_observation;
		const forecasts = response.forecasts;

		// Updating the DOM elements
		document.getElementById('city').innerText = location.city;
		document.getElementById('temperature').innerText = current.condition.temperature;
		document.getElementById('condition').innerText = current.condition.text;
		document.getElementById('humidity').innerText = current.atmosphere.humidity;
		document.getElementById('wind').innerText = `${current.wind.speed} mph ${current.wind.direction}`;
		document.getElementById('visibility').innerText = current.atmosphere.visibility;
		document.getElementById('sunrise').innerText = current.astronomy.sunrise;
		document.getElementById('sunset').innerText = current.astronomy.sunset;

		// Updating the forecast
		const forecastContainer = document.getElementById('forecast');
		forecastContainer.innerHTML = ''; // Clear any existing content
		forecasts.forEach(forecast => {
			forecastContainer.innerHTML += `
				<div>
					<h3>${forecast.day}</h3>
					<p>Date: ${new Date(forecast.date * 1000).toDateString()}</p>
					<p>High: ${forecast.high} °F</p>
					<p>Low: ${forecast.low} °F</p>
					<p>Condition: ${forecast.text}</p>
				</div>
			`;
		});
	}
});

xhr.open('GET', 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f');
xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
xhr.setRequestHeader('x-rapidapi-host', 'yahoo-weather5.p.rapidapi.com');

xhr.send(data);
