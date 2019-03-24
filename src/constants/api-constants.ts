import dotenv from 'dotenv'

dotenv.config()

export const ZIP_TO_LOCATION_API =
  `https://www.zipcodeapi.com/rest/${process.env.ZIP_CODE_API_KEY}/info.json`

export const LOCATION_TO_TIME_API =
  'http://worldtimeapi.org/api/timezone/'

export const LOCATION_TO_WEATHER_API =
  `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}`
