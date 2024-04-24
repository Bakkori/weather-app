let button = document.getElementById('btn');
let input = document.getElementById('city');
let result = document.getElementById('result');
let dgree = document.getElementById('dgree');

button.addEventListener("click", function(){
    let city = input.value;
    result.innerText = "Getting result...";
    getWeatherData(city);
    /////////////////
})

async function getWeatherData(city){
    let apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=02438250de1148b1883211155242304&q="+city+"&days=1&aqi=no&alerts=no";
    let response = await fetch(apiUrl);
    let responseObj = await response.json();
    console.log(responseObj.location);
    result.innerText = "The temperature for "+city+" is: ";
    let icon = '🙂';
    if (responseObj.current.temp_c < 15) {
        icon = '🥶';
    } else if (responseObj.current.temp_c > 30) {
        icon = '🥵';
    }
    dgree.innerText = responseObj.current.temp_c+"°c "+icon;
}
    
