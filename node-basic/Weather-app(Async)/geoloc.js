const geoCode =(address,callback)=>{
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYWJiYXNuYXF2aSIsImEiOiJjazVnc2J3NGEwYmJyM3BsM3RsODgzcTF3In0.8UZVf2ThS-ZAfgi7nD754w&limit=1"
    const axios = require("axios")

    axios.get(geocodeUrl)
    
        .then((result) => {
            const body = result.data
            if(body.length === 0){
                console.log("No result found")
            }
            else{
                const {center,place_name} = body.features[0]
                const longitude = center[0]
                const latitude = center[1]
                console.log(place_name)
                console.log("longitude is "+longitude+" latitude is "+latitude)
                callback(longitude,latitude)
            }      
        }) 
        .catch((err) => {
            console.log(err)
        });
}

module.exports=geoCode