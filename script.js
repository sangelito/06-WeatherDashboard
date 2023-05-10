var owmAPI = "12117e6db7383302b3fd7a3d3a922c37"; 
var currentCity = ""; 
var lastCity = ""; 

// Error handler for fetch
var handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

var getCurrentConditions = (event) => {
    let city = $('#search-city').val();
    currentCity = $('#search-city').val();

    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial" + "&APPID=" + owmAPI;
    fetch(queryURL)
    .then(queryURL => { return queryURL.json()})
    .then(response => {console.log (response)})
  
.then((response) => {
    //save to local storage
    saveCity(city); 
    $('#search-error').text("")
    //icon for weather
    let currentWeatherIcon ="https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    //time zone
    let currentTimeUTC = response.dt;
    let currentTimeZoneOffset = response.timezone;
    let currentTimeZoneOffsetHours = currentTimeZoneOffset / 60 / 60;
    let currentMoment = moment.unix(currentTimeUTC).utc().utcOffset(currentTimeZoneOffsetHours);
})
 }


 var saveCity = (newCity) => {
    let cityExists = false;
    // Check if City exists in local storage
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage["cities" + i] === newCity) {
            cityExists = true;
            break;
        }
    }
 //save to local storage
 if (cityExists === false){
    localStorage.setItem('cities' + localStorage.length, newCity);
    }
 }
 
 var renderCities = () => {
    $('#city-results').empty();
    if (localStorage.length===0){
        if(lastCity){
            $('#search-city').attr("value", lastCity);
        } else{ 
            $('#search-city').attr("value", "Chicago");
        }
    } else {
        let lastCityKey="cities"+(localStorage.length-1);
        lastCity=localStorage.getItem(lastCityKey);
        $('#search-city').attr("value", lastCity);
        for (let i=0; i < localStorage.length; i++){
            let city = localStorage.getItem("cities" + i);
            let cityEl;
            //set to last 
        }
    }
 }


getCurrentConditions();

