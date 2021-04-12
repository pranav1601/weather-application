const request=require('request')

forecast=(lat, lon, callback)=>{
    const url='http://api.weatherstack.com/current?access_key=629b6762b81f4cabbfbd52ff9ba8de24&query='+encodeURIComponent(lat)+','+encodeURIComponent(lon)+'&units=m'

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions[0]+': It is currently '+response.body.current.temperature+' degrees out. It feels like it is '+response.body.current.feelslike+' degrees out')
        }
    })

}

module.exports=forecast