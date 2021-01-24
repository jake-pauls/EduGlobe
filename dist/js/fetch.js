// Fetch APIs
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
                        parseCovidJSON(data);
                    });
            })
        .catch((err) => {
            console.log('Oops! An error occurred during the fetch:-S', err);
        });
}

// [country, lat, long]
function parseCovidJSON(jsonData) {
    var covidData = new Array();
    for (var i = 0; i < jsonData.length; i++) {
        country = jsonData[i].country;
        lat = jsonData[i].countryInfo.lat;
        long = jsonData[i].countryInfo.long;
        covidData[i] = [country, lat, long];
    }
    return covidData;
}