const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/520901b98f15ce22d4e76c7a8a4d819d/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({url, json: true} , (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services !', undefined)
        } else if (body.error) {
            callback('Unable to find location !', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + 
            body.currently.temperature + " degrees out. High temperature is about " + body.daily.data[0].temperatureHigh + " and low is " + body.daily.data[0].temperatureLow +  ". There is a " + body.currently.precipProbability + " % chance of rain.")
        }
    })
}

module.exports = forecast
