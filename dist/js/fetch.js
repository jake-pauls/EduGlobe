// Fetch APIs

// COVID Data Per Country
const COVID_API_URL = "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=true";

window.addEventListener("load", (event) => {
    var covid_button = document.getElementById("covid_button");

    // Event Listeners for buttons
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

// [country, lat, long]
function processCovidJSON(jsonData) {
    var covidData = new Array();
    for (var i = 0; i < jsonData.length; i++) {
        country = jsonData[i].country;
        lat = jsonData[i].countryInfo.lat;
        long = jsonData[i].countryInfo.long;
        covidData[i] = [country, lat, long];
    }
    return covidData;
}