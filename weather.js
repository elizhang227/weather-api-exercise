const weatherDiv = document.querySelector('[data-weather]');
console.log(weatherDiv);
// Append location name to the weather div
function addLocationName(object) {
    //const location = document.getElementById('data-weather');
    const locationItem = document.createElement('div');
    locationItem.textContent = object;
    weatherDiv.append(locationItem);
}
// Add temperature to weather div
function addTemp(object) {
    const tempItem = document.createElement('div');
    tempItem.textContent = object;
    weatherDiv.append(tempItem);
}
// Add wind speed to weather div
function addWind(object) {
    const windItem = document.createElement('div');
    windItem.textContent = object;
    weatherDiv.append(windItem);
}
// Add icon to weather div
function addIcon(object) {
// get icon code from object
// Use the icon code to get the icon using OpenWeatherMap.org
    const iconCode = object.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    const imageItem = document.createElement('img');
    imageItem.src = iconUrl;
    weatherDiv.append(imageItem);

    const conditionsItem = document.createElement('h2');
    conditionsItem.textContent = object.weather[0].description;
    weatherDiv.append(conditionsItem);

// Create a new image element using the iconUrl
// Add the weather conditions to an h2 element
// Append the text and image to the weatherDiv
}
// adds whatever data is passed to the weather div
function addToWeather(data) {

}
// creates map showing lat long of weather info
function addMap(object) {
// get lat and long coordinates
// Use the Lat/Long to create a map
    const lat = object.coord.lat;
    const lon = object.coord.lon;
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
// create iframe and set attributes
    const iframe = document.createElement('iframe');
    iframe.src = mapUrl;
    weatherDiv.append(iframe);
}

function test(unix) {
    const date = new Date(unix*1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}
//function sunInfo(object, timeOfDay) {
function sunInfo(object) {
// get sunrise and sunset info
    const sunriseInfo = object.sys.sunrise;
    const sunsetInfo = object.sys.sunset;
// convert to standard date format

    const sunriseTime = document.createElement('div');
    sunriseTime.textContent = test(sunriseInfo);
    const sunsetTime = document.createElement('div');
    sunsetTime.textContent = test(sunsetInfo);

    weatherDiv.append(sunriseTime);
    weatherDiv.append(sunsetTime);
}
// add correctly formatted dates to the page
function formatDate(date) {
// Get the date
    const day = date.getDate();
// Get the month
// month starts at 0
    const month = date.getMonth() + 1;
    console.log(month);
// Get the hours
    const hours = date.getHours();
// Get the minutes
    let minutes = date.getMinutes();
// if statement to reformat minutes
// from a single digit to a two digit with a leading zero
// i.e. change "1" to "01"
// Get seconds
// Format the time in a friendly format
// Format the date in a friendly format
// Return the date and time...
return
}
// Use the below URL to make a fetch request,
// and then run the above functions to populate the page
const URL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1";

function getWeatherInfo() {
    get(URL)
    .then((response) => {
        //console.log(response);
        addLocationName('Location: ' + response.name);
        addTemp('Temperature: ' + Math.floor((9/5) * (response.main.temp - 273) + 32));
        addWind('Wind Speeds: ' + response.wind.speed);
        addIcon(response);
        addMap(response);
        sunInfo(response);
    })
}