const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

const location=process.argv[2]
if(location){
    geocode(location,(error,data)=>{
        if(error){
            return console.log(error)
        }
        const {longitude,latitude,location}=data
        forecast(longitude,latitude,(error,forecastData)=>{
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}else{
    console.log('Please provide a location!')
}
