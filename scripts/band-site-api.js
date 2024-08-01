// Bandsite Sprint 3

const url = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";

const fetch = async () => {
    const response = await axios.get(url+"register");
    console.log(response);
}

fetch();