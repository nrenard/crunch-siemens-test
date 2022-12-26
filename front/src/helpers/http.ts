import axios from 'axios';

const http = new axios.Axios({ baseURL: process.env.REACT_APP_BASE_URL });

export default http;
