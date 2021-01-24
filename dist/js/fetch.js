// Fetch APIs

// COVID Data Per Country
// https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=true

const COVID_API_URL = "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=true";

callAPI(COVID_API_URL);

function callAPI(api_url) {
    fetch(api_url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    processJSONData(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function processJSONData(jsonData) {
    if (typeof jsonData != 'string')
        jsonData = JSON.stringify(jsonData, undefined, 2);
    document.getElementById("json").innerHTML = jsonData;
}