

var search =document.getElementById("glass")

search.addEventListener("click",()=>{
	console.log("this is clicked")
	
	var inputtype=document.getElementById("city")
if(inputtype.value==""){
	window.alert("enter the value ")
}

else{
    const data = null;
const cityName=inputtype.value
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        const response=JSON.parse(this.response)
        const name=response.name
        const timezone=response.timezone
        const sys=response.sys
        const clouds=response.clouds
        const rain=response.rain
        const wind=response.wind
        const visibility=response.visibility
        const main=response.main
        const weather=response.weather
        const coord=response.coord
        document.getElementById("citeh").innerText=name
			document.getElementById("temperature").innerText=main.temp
			document.getElementById('condition').innerText = weather.description
			document.getElementById("humidity").innerText=main.humidity
			document.getElementById("wind").innerText=wind
			document.getElementById("visibility").innerText=visibility
			document.getElementById("sunrise").innerText=sys.sunrise
			document.getElementById("sunset").innerText=sys.sunset


       
}




	}







);

xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`);
xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');

xhr.send(data);
}
})
//  {
//     "coord":{"lon":72.8479,"lat":19.0144}
//  ,"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}]
//  ,"base":"stations",
//  "main":{"temp":303.14,"feels_like":309.16,"temp_min":303.09,"temp_max":303.14,"pressure":1003,"humidity":74,"sea_level":1003,"grnd_level":1002},
//  "visibility":3000,
//  "wind":{"speed":4.12,"deg":280},
//  "rain":{"1h":0.1},
//  "clouds":{"all":75},
//  "dt":1724064882,
//  "sys":{"type":1,"id":9052,"country":"IN","sunrise":1724028657,"sunset":1724074428},
// //  "timezone":19800,
// //  "id":1275339,
// //  "name":"Mumbai",
// //  "cod":200
// }


function updateWeather(){
    var first=document.getElementById("0").innerText
    const citytier=first
    // var temp_hyd=document.getElementById("hyderabad")


    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        const response=JSON.parse(this.responseText);
        const main=response.main

        document.getElementById("Hyderabad").innerText=main.temp


	}
});

xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${citytier}`);
xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');

xhr.send(data);   


    

}
updateWeather()
function updateWeather(){
    var first=document.getElementById("0").innerText
    const citytier=first
    // var temp_hyd=document.getElementById("hyderabad")


    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        const response=JSON.parse(this.responseText);
        const main=response.main

        document.getElementById("Hyderabad").innerText=main.temp


	}
});

xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${citytier}`);
xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');

xhr.send(data);   


    

}
updateWeather()
function updateWeathe(){
    var first=document.getElementById("1").innerText
    const citytier=first
    // var temp_hyd=document.getElementById("hyderabad")


    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        const response=JSON.parse(this.responseText);
        const main=response.main

        document.getElementById("Hyderabad").innerText=main.temp


	}
});

xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${citytier}`);
xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');

xhr.send(data);   


    

}
updateWeathe()
function updateWeath(){
    var first=document.getElementById("2").innerText
    const citytier=first
    // var temp_hyd=document.getElementById("hyderabad")


    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        const response=JSON.parse(this.responseText);
        const main=response.main

        document.getElementById("Hyderabad").innerText=main.temp


	}
});

xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${citytier}`);
xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');

xhr.send(data);   


    

}
updateWeath()
function updateWeat(){
    var first=document.getElementById("3").innerText
    const citytier=first
    // var temp_hyd=document.getElementById("hyderabad")


    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        const response=JSON.parse(this.responseText);
        const main=response.main

        document.getElementById("Hyderabad").innerText=main.temp


	}
});

xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${citytier}`);
xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');

xhr.send(data);   


    

}
updateWeat()
function updateWea(){
    var first=document.getElementById("4").innerText
    const citytier=first
    // var temp_hyd=document.getElementById("hyderabad")


    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        const response=JSON.parse(this.responseText);
        const main=response.main

        document.getElementById("Hyderabad").innerText=main.temp


	}
});

xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${citytier}`);
xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');

xhr.send(data);   


    

}
updateWea()















// function logic(){
//     var day=Array.from(document.getElementsByClassName("monday"))
//     console.log(day)

//     if(day.length==""){
//         window.alert("this aint shit")
// erText
//             const cityElement=e[i]
//     }
//     else{
    
//                  const newCity=day.inn
//             // console.log(cityElement)

//             const data = null;

//             const xhr = new XMLHttpRequest();
//             xhr.withCredentials = true;
            
//             xhr.addEventListener('readystatechange', function () {
//                 if (this.readyState === this.DONE) {
//                     console.log(this.responseText);
//                     const response=JSON.parse(this.responseText);
//                     const main=response.main
            
//                     document.getElementById("Hyderabad").innerText=main.temp
            
            
//                 }
//             });
            
//             xhr.open('GET', `https://weather-api138.p.rapidapi.com/weather?city_name=${newCity}`);
//             xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
//             xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');
            
//             xhr.send(data);   
            
            
                
            
//         }
       

//     }


// logic()