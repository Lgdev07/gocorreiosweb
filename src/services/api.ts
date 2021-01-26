import axios from 'axios'

const api = axios.create({
  baseURL: 'https://g2arxw8koj.execute-api.us-west-2.amazonaws.com/staging',
})

export default api
