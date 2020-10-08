import axios from 'axios';
const ApiRE = axios.create({
  baseURL: process.env.REACT_APP_API_URL||'http://swgb-realestatebackend.herokuapp.com/',
  timeout: 60000
})

export default ApiRE;