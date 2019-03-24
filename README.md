# Time and Weather Generator

A NodeJS program for generating time and weather information from the postal code
data of various locations supplied to it.


### Requirements
- Ensure you have the latest version of NodeJS and NPM installed on your machine
- The project uses typescript so install it by executing `npm install -g typescript` from your terminal

### Usage
From the terminal perform these steps:
- Navigate to the directory where you want the project installed
- Clone the repository `git clone git@github.com:ekundayo-ab/nodejs-time-and-weather-generator.git`

#### Environment setup
Two API keys are being used in the application currently, follow the link below to register and get yours
1. Zip Code API key https://www.zipcodeapi.com/Register
2. Dark Sky API key https://darksky.net/dev/register

After getting the key, in the root of the cloned project, look for a `.env.sample` file and rename it to `.env` then fill in the API keys gotten above in their respective places in the `.env` file.

- `cd` into the directory `nodejs-time-and-weather-generator`
- Still on the terminal execute `npm start`, wait for some time and you would see the log of the time and weather information generated for the sample locations included in the application.

### Generating time and weather information for your own data
You can use the class to generate the time and weather information for your custom provided locations, the class takes in an array of locations of the shape as shown in the example below:

```ts
// The class input consists of an array of locations as shown below
const inputLocations = [
  { name: 'Chicago', postalCode: '60176 },
  { name: 'California', postalCode: '90001' }
]

// To pass in the data and get your needed information do so:
// Ensure the class is imported where you need it
import TimeAndWeatherGenerator from './time-and-weather-generator'

const outputLocations = new TimeAndWeatherGenerator.new(inputLocations)

// This logs the data to the console and can be used as a promise too.
outputLocations.fetchTimeAndWeather()
```

### Sample generated data
```js
[ { name: 'California',
    time: '3/24/2019, 9:31:49 AM',
    weather:
     { time: 1553445112,
       summary: 'Clear',
       icon: 'clear-day',
       nearestStormDistance: 456,
       nearestStormBearing: 335,
       precipIntensity: 0,
       precipProbability: 0,
       temperature: 59.41,
       apparentTemperature: 59.41,
       dewPoint: 41.4,
       humidity: 0.51,
       pressure: 1025.83,
       windSpeed: 14.04,
       windGust: 15.86,
       windBearing: 281,
       cloudCover: 0,
       uvIndex: 7,
       visibility: 10,
       ozone: 333.79 } },
  { name: 'Chicago',
    time: '3/24/2019, 11:31:49 AM',
    weather:
     { time: 1553445112,
       summary: 'Partly Cloudy',
       icon: 'partly-cloudy-day',
       precipIntensity: 0,
       precipProbability: 0,
       temperature: -31.34,
       apparentTemperature: -55.61,
       dewPoint: -40.76,
       humidity: 0.58,
       pressure: 1029.2,
       windSpeed: 10.75,
       windGust: 11.84,
       windBearing: 242,
       cloudCover: 0.33,
       uvIndex: 0,
       visibility: 10,
       ozone: 454.15 } } ]
```

#### My shweet terminal screenshot!
![Sample data](./generated_sample_data.png?raw=true)
