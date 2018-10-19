const API_KEY = "a303b17e22fa7b375989b7c265484f93"

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault()
  let inputCity = event['target'][0]['value']
  console.log(inputCity)
  fetchCurrentWeather(inputCity)
  fetchFiveDayForecast(inputCity)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  let url = 'https://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&q=' + city
  fetch(url).then(response => response.json()).then(json => displayCurrentWeather(json))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  console.log(json['main'])
    document.getElementById("temp").innerHTML = json['main']['temp']
    document.getElementById("low").innerHTML = json['main']['temp_min']
    document.getElementById("high").innerHTML = json['main']['temp_max']
    document.getElementById("humidity").innerHTML = json['main']['humidity']
    document.getElementById("cloudCover").innerHTML = json['main']['pressure']
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  let url = 'https://api.openweathermap.org/data/2.5/forecast?APPID=' + API_KEY + '&q=' + city
  fetch(url).then(response => response.json()).then(json => displayFiveDayForecast(json))
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log(json['list'])
  let aside = document.querySelector('aside')
  
  for (let index = 0; index < 39; index++){
    let div = document.createElement('div')
    aside.appendChild(div)
    div.innerHTML = json['list'][index]['dt_txt'] + " Temperature: " + json['list'][index]['main']['temp'] + " Humidity: " + json['list'][index]['main']['humidity']
  }
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  const submit = document.getElementById("cityForm")
  submit.addEventListener('submit', (e) => handleFormSubmit(e))
}
)