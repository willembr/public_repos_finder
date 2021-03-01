import axios from 'axios';

const githubToken = 'e2c71850f99d3de28e6c1144a3724b92d774053e';

const instance = axios.create({
    baseURL:"https://api.github.com/",
    headers: {"Authorization" : "token " + githubToken}
});

export default instance;