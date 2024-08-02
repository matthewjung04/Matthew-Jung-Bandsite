// Bandsite Sprint 3

const url = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";

const fetch = async () => {
    // Use axios.get to retreive API key
    const apiKeyResponse = await axios.get(url + "register");
    const apiKey = "?api_key=" + apiKeyResponse.data.api_key;

    // Use axios.get to retreive comments
    const commentsResponse = await axios.get(url + "comments/" + apiKey);
    let [comment1, comment2, comment3] = commentsResponse.data;

    // Use axios.get to retreive show dates
    const showsResponse = await axios.get(url + "showdates/" + apiKey);
    let [show1, show2, show3, show4, show5, show6] = showsResponse.data;
}

fetch();