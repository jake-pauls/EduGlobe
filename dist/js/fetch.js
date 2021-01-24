// Fetch APIs

// COVID Data Per Country
const COVID_API_URL = "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=true";

// NASA Events API geoJSON
const DISASTER_API_URL = "https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?limit=5";

window.addEventListener("load", (event) => {
    var covid_button = document.getElementById("covid_button");

    // Event Listeners for Buttons
    covid_button.addEventListener('click', () => {
        callAPI(COVID_API_URL);
    });
});

function callAPI(api_url) {
    fetch(api_url)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Oops! Error retrieving API data with status code: ' + response.status);
                    return;
                }
                response.json().then(
                    (data) => {
                        processCovidJSON(data);
                    });
            })
        .catch((err) => {
            console.log('Oops! An error occurred during the fetch:-S', err);
        });
}

function processCovidJSON(jsonData) {
    var covidData = new Array();
    for (var i = 0; i < jsonData.length; i++) {
        countryInfo = jsonData[i].country;
        latInfo = jsonData[i].countryInfo.lat;
        longInfo = jsonData[i].countryInfo.long;
        covidData[i] = [countryInfo, latInfo, longInfo];
    }
}