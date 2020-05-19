import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const APP_ID = '68309a2a18265a2ca47dcd9e5b39f9d2'

const WeatherAPI = axios.create({
  baseURL: BASE_URL,
})

WeatherAPI.interceptors.request.use(
  (config) => {
    if (config.params) {
      config.params['appid'] = APP_ID
      config.params['units'] = 'metric'
      config.params['lang'] = 'pt_BR'
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default WeatherAPI
