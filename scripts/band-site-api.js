// Bandsite Sprint 3

// API url link fore retrieving API key
const apiUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/register";

const fetch = async () => {
    // Use axios.get to retreive API key
    const apiKeyResponse = await axios.get(apiUrl);
    const apiKey = "?api_key=" + apiKeyResponse.data.api_key;
    return apiKey;
}

class BandSiteApi {
    // Set the parameters for the class as the API url and key
    constructor(apiKey) {
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
        this.apiKey = apiKey;
    }

    // Use axios.get to retreive comments
    async getComments() {
        const commentsResponse = await axios.get(this.baseUrl + "comments/" + this.apiKey);
        return commentsResponse.data
    }

    // Use axios.get to retreive comments
    async getShows() {
        const showsResponse = await axios.get(this.baseUrl + "showdates/" + this.apiKey);
        return showsResponse.data
    }
}

let BandSiteApiGet = new BandSiteApi(await fetch()); // Extract data from WebAPI link
export let comments = await BandSiteApiGet.getComments(); // Extract comments object array from original data
export let shows = await BandSiteApiGet.getShows(); // Extract show times object array from original data
