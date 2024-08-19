
let songIndex=0
var search =document.getElementById("glass")
search.addEventListener("click",()=>{
	console.log("this is clicked")
	
	var inputtype=document.getElementById("city")
if(inputtype.value==""){
	window.alert("enter the value ")
}
else{
	const cityName=inputtype.value
	const data = null;
		
	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	
	xhr.addEventListener('readystatechange', function () {
		if (this.readyState === this.DONE) {
			console.log(this.responseText);
			const response = JSON.parse(this.response)
			const location=response.location
			const current=response.current_observation
			const forecasts=response.forecasts
		  
            
			document.getElementById("city").innerText= location.city
			document.getElementById("temperature").innerText=current.condition.temperature
			document.getElementById('condition').innerText = current.condition.text;
			document.getElementById("humidity").innerText=current.atmosphere.humidity
			document.getElementById("wind").innerText=`${current.wind.chill}mph ${current.wind.speed} ${current.wind.direction}`
			document.getElementById("visibility").innerText=current.atmosphere.visibility
			document.getElementById("sunrise").innerText=current.astronomy.sunrise
			document.getElementById("sunset").innerText=current.astronomy.sunset
            // document.getElementById("monday").

            // document.getElementById("wednesday").innerText=
            // document.getElementById("thursday").innerText=
            // document.getElementById("friday")
            // document.getElementById("saturday")
            // var days=Array.from(document.getElementsByClassName("monday"))


          
// function updateWeather(forecasts){
//     const cityElements=document.querySelectorAll(".city-weather")
// forecasts.slice(0,cityElements.length).forEach((e,i)=>{
// const cityElement=cityElements[i]
// const tempelement=cityElement.querySelector('#mon_temp')

// tempelement.innerText = `${e.high}°F / ${e.low}°F`;


    // const cityElements=document.querySelectorAll(".city-weather")
    // forecasts.slice(e,cityElements.length).forEach((e,i)=>{
    //     const cityElement=cityElements[i]
    //     const tempelement=cityElement.querySelector("#mon_temp")
    //     tempelement.innerText=`${e.high}`

    // const cityElements=document.querySelectorAll(".city-weather")


			// ,"forecasts":[{"day":"Sat","date":1723996800,"high":83,"low":61,"text":"Mostly Cloudy","code":28},{"day":"Sun","date":1724083200,"high":76,"low":56,"text":"Partly Cloudy","code":30},{"day":"Mon","date":1724169600,"high":77,"low":55,"text":"Partly Cloudy","code":30},{"day":"Tue","date":1724256000,"high":82,"low":59,"text":"Sunny","code":32},{"day":"Wed","date":1724342400,"high":79,"low":57,"text":"Sunny","code":32},{"day":"Thu","date":1724428800,"high":77,"low":59,"text":"Partly Cloudy","code":30},{"day":"Fri","date":1724515200,"high":77,"low":58,"text":"Mostly Cloudy","code":28},{"day":"Sat","date":1724601600,"high":77,"low":59,"text":"Sunny","code":32},{"day":"Sun","date":1724688000,"high":78,"low":58,"text":"Sunny","code":32},{"day":"Mon","date":1724774400,"high":79,"low":60,"text":"Partly Cloudy","code":30},{"day":"Tue","date":1724860800,"high":75,"low":57,"text":"Partly Cloudy","code":30}]}
	
            // function updateWeather(forecasts) {
            //     // Select all city-weather elements
            //     const cityElements = document.querySelectorAll(".city-weather");
            
            //     // Loop through each forecast and update the corresponding city element
            //     forecasts.slice(0, cityElements.length).forEach((forecast, index) => {
            //         const cityElement = cityElements[index];
            //         const tempElement = cityElement.querySelector('.mon_temp');
                    
            //         // Update the temperature
            //         tempElement.innerText = `${forecast.high}°F / ${forecast.low}°F`;
            //     });
            // }

            // updateWeather(forecasts)

            // function updateWeather(forecasts){
            //     const cityElements=document.querySelectorAll(".city-weather")
            //     forecasts.forEach((e,i)=>{
            //         const cityElement=cityElements[i]
            //         const tempElement=cityElement.querySelector(".mon_temp")
            //         tempElement.innerText=`${e.high}`
            //     })
            // }
  
            // updateWeather(forecasts)


            function updateWeather(forecasts){
                const cityElements=document.querySelectorAll(".city-weather")
                forecasts.forEach((e,i)=>{
                    const cityElement=cityElements[i]
                    const tempElement=cityElement.querySelector(".mon_temp")
                    tempElement.innerText=`${e.high}`
                })
            }
            updateWeather(forecasts)
    
  

    


        }})
    
	
	xhr.open('GET', `https://yahoo-weather5.p.rapidapi.com/weather?location=${cityName}&format=json&u=f`);
    // xhr.open('GET', `https://yahoo-weather5.p.rapidapi.com/weather?location=${cityName}&format=json&u=f`);
	xhr.setRequestHeader('x-rapidapi-key', 'a813970abfmsh03453c40e9c49c0p177e49jsn6863a38efb8b');
	xhr.setRequestHeader('x-rapidapi-host', 'yahoo-weather5.p.rapidapi.com');
	
	xhr.send(data);

}} 
)









