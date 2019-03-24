import { fetchLocation, fetchTime, fetchWeather } from './api';
import { LocationInput, LocationOutput } from './interfaces';

class TimeAndWeatherGenerator {
  locations: LocationInput[] = []
  detailedLocations: LocationOutput[] = []

  constructor(locationsInput: LocationInput[]) {
    this.locations = locationsInput
  }

  async calculateTime(location: LocationInput) {
    try {
      const { timezone } = await fetchLocation(location.postalCode)
      return await fetchTime(timezone.timezone_identifier)
    } catch (error) {
      return error.response.data
    }
  }

  async fetchWeatherCondition(location: LocationInput) {
    const { lat, lng } = await fetchLocation(location.postalCode)
    return await fetchWeather(lat, lng)
  }

  async fetchTimeAndWeather() {
    Promise.all(this.locations.map(async (location) => {
      this.detailedLocations.push(
        {
          name: location.name,
          time: await this.calculateTime(location),
          weather: await this.fetchWeatherCondition(location)
        }
      )
    })).then(() => {
      console.log(this.detailedLocations)
    })
  }
}

// Sample tests
const locationsTimeAndWeather = new TimeAndWeatherGenerator([
  { name: 'Chicago', postalCode: '60176' },
  { name: 'California', postalCode: '90001' }
])
locationsTimeAndWeather.fetchTimeAndWeather()
