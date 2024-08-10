// Bandsite Sprint 3

// API url link fore retrieving API key
const apiUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/register";

const header = {
    'Content-Type': 'application/json'
}

export const fetch = async () => {
    // Use axios.get to retreive API key
    const apiKeyResponse = await axios.get(apiUrl);
    const apiKey = "?api_key=" + apiKeyResponse.data.api_key;
    return apiKey;
}

export class BandSiteApi {
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

    // Use axios.post for new comments
    async postComments (commentObj) {
        const postResponse = await axios.post(
            (this.baseUrl + "comments/" + this.apiKey),
            {"name": commentObj.name, "comment": commentObj.comment},
            {headers: header}
        )
        return postResponse
    }

    // Use axios.put to update number of likes on a comment
    async likeComments(data) {
        const id = data.id;
        const likeResponse = await axios.put(
            (this.baseUrl + "comments/" + id + "/like/" + this.apiKey),
            data.likes++
        )
        return likeResponse
    }
}

let BandSiteApiData = new BandSiteApi(await fetch()); // Extract data from WebAPI link
export let comments = await BandSiteApiData.getComments(); // Extract comments object array from original data
export let shows = await BandSiteApiData.getShows(); // Extract show times object array from original data