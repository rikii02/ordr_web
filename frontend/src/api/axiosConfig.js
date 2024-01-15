import axios from 'axios';

export default axios.create ({
    baseURL: 'https://8080-rikii02-ordrweb-md67d9pw3m9.ws-eu107.gitpod.io',
  headers: {
    'Content-Type': 'application/json',
  },
});