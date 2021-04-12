const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

const location=process.argv[2]
if(location){
    geocode(location,(error,data)=>{
        if(error){
            return console.log(error)
        }
        forecast(data.longitude,data.latitude,(error,forecastData)=>{
            if(error){
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })
}else{
    console.log('Please provide a location!')
}
