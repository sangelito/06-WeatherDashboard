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

