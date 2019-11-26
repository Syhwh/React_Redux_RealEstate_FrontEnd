import axios from 'axios';
const ApiRE = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 60000
})

export default ApiRE;