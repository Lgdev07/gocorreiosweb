import axios from 'axios'

const api = axios.create({
  baseURL: 'https://kborj4xbx1.execute-api.us-west-2.amazonaws.com/staging',
})

export default api
