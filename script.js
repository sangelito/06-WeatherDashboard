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
    .then(queryURL)
    .then((response) => {
        return response.json()
    })
}

getCurrentConditions();