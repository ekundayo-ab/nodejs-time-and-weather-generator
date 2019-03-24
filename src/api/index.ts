import axios from 'axios'
import { LOCATION_TO_TIME_API, ZIP_TO_LOCATION_API, LOCATION_TO_WEATHER_API } from '../constants';

export const fetchLocation = async (zipCode: string) => {
  try {
    const location = await axios.get(`${ZIP_TO_LOCATION_API}/${zipCode}/degrees`)
    return location.data
  } catch (error) {
    console.log(error.response.data)
    return error
  }
}

export const fetchTime = async (locationZoneId: string) => {
  try {
    const time = await axios.get(`${LOCATION_TO_TIME_API}/${locationZoneId}`)

    // Solution for ensuring date is shown in the location's timezone
    // gotten here https://stackoverflow.com/questions/15141762/how-to-initialize-a-javascript-date-to-a-particular-time-zone
    return new Date(time.data.datetime)
      .toLocaleString("en-US", {timeZone: locationZoneId})

  } catch (error) {
    console.log(error.response.data)
    return error
  }
}

export const fetchWeather = async(lat:number, lng:number) => {
  try {
    const weather = await axios.get(`${LOCATION_TO_WEATHER_API}/${lat}, ${lng}`)
    return weather.data.currently
  } catch (error) {
    console.log(error.response.data)
    return error
  }
}
