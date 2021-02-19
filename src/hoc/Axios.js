import axios from 'axios';

const githubToken = '88dee40beb64edc2848a496f3331cce6e72ec6c6';

const instance = axios.create({
    baseURL:"https://api.github.com/",
    headers: {"Authorization" : "token " + githubToken}
});

export default instance;