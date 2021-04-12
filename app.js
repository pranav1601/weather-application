const request=require('request')

// const url='http://api.weatherstack.com/current?access_key=629b6762b81f4cabbfbd52ff9ba8de24&query=37.8267,-122.4233&units=m'

// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }else{
//         console.log(response.body.current.weather_descriptions[0]+': It is currently '+response.body.current.temperature+' degrees out. It feels like it is '+response.body.current.feelslike+' degrees out')
//     }
    
    
// })

const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Bangalore.json?access_token=pk.eyJ1IjoicHJhbmF2MTYwMSIsImEiOiJja25kajB5aGcxdnlkMm5tcTJ3cWZtYnNiIn0.LlZXwJ5Xfl99F7z5GRb_1A&limit=1'

request({url:geocodeURL,json:true},(error,response)=>{
    // console.log(response.body)
    if(error){
        console.log('Unable to connect to service')
    }else if(response.body.features.length===0){
        console.log('Location not found!')
    }else{
        const features=response.body.features[0]
        console.log(features.center[0])
        console.log(features.center[1])
    }
    
})