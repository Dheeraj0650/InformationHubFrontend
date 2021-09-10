
const info = {
                lat:'Geographical coordinates of the location (latitude)',
                lon:'Geographical coordinates of the location (longitude)',
                timezone:'Timezone name for the requested location',
                timezone_offset :'Shift in seconds from UTC',
                current :'Current weather data API response',
                dt:'Current time, Unix, UTC',
                sunrise:'Sunrise time, Unix, UTC',
                sunset :'Sunset time, Unix, UTC',
                temp :'Temperature. Units - default: kelvin, metric: Celsius, imperial: Fahrenheit',
                feels_like :'Temperature. This temperature parameter accounts for the human perception of weather. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.',
                pressure:'Atmospheric pressure on the sea level, hPa',
                humidity :'Humidity, %',
                dew_point :'Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.',
                clouds :'Cloudiness, %',
                uvi :'Current UV index',
                visibility:'Average visibility, metres',
                wind_speed :'Wind speed. Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used',
                wind_gust :'Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour. How to change units used',
                wind_deg :'Wind direction, degrees (meteorological)',
                moonrise:'The time of when the moon rises for this day, Unix, UTC',
                moonset:'The time of when the moon sets for this day, Unix, UTC',
                moon_phase:"Moon phase. 0 and 1 are 'new moon', 0.25 is 'first quarter moon', 0.5 is 'full moon' and 0.75 is 'last quarter moon'. The periods in between are called 'waxing crescent', 'waxing gibous', 'waning gibous', and 'waning crescent', respectively.",
                pop:'Probability of precipitation',
                rain :'Precipitation volume, mm',
                precipitation: 'Precipitation volume, mm'
              }

export default info;
