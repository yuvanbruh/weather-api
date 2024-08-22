var search = document.getElementById("glass");

search.addEventListener("click", () => {
    console.log("this is clicked");
    
    var inputtype = document.getElementById("city");
    if (inputtype.value == "") {
        window.alert("enter the value ");
    } else {
        const data = null;
        const cityName = inputtype.value;
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                const response = JSON.parse(this.responseText);
                const name = response.name;
                const timezone = response.timezone;
                const sys = response.sys;
                const clouds = response.clouds;
                const rain = response.rain;
                const wind = response.wind;
                const visibility = response.visibility;
                const main = response.main;
                const weather = response.weather[0]; // Assuming there's only one weather object
                const coord = response.coord;

                // Convert temperature to Celsius
                const temperatureInCelsius = main.temp - 273.15;

                document.getElementById("citeh").innerText = name;
                document.getElementById("temperature").innerText = temperatureInCelsius.toFixed(2) + " °C";
                document.getElementById('condition').innerText = weather.description;
                document.getElementById("humidity").innerText = main.humidity + " %";
                document.getElementById("wind").innerText = wind.speed + " m/s";
                document.getElementById("visibility").innerText = visibility + " m";
                document.getElementById("sunrise").innerText = new Date(sys.sunrise * 1000).toLocaleTimeString();
                document.getElementById("sunset").innerText = new Date(sys.sunset * 1000).toLocaleTimeString();
            }
        });

        xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`);
        xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
        xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');
        xhr.send(data);
    }
});

const cities = ["Hyderabad", "Denver", "Texas", "Sydney", "California", "Nevada"];

const updateTemperature = (cityName, temperature) => {
    const cityElements = document.querySelectorAll(".city-weather .monday");
    console.log(cityElements);
    cityElements.forEach((e) => {
        if (e.textContent === cityName) {
            const tempElement = e.nextElementSibling;
            if (tempElement) {
                tempElement.textContent = temperature + " °C";
            }
        }
    });
};

const fetchCityData = (cityName) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            const temperatureInCelsius = response.main.temp - 273.15;
            updateTemperature(cityName, temperatureInCelsius.toFixed(2));
        }
    });

    xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`);
    xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
    xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');
    xhr.send(null);
};

cities.forEach(city => fetchCityData(city));
