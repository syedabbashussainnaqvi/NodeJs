const forcast = (longitude,latitude)=>{
    const axios = require("axios")
    const url ="https://api.darksky.net/forecast/2b3ea08480213be30e294f56d0e5736e/"+latitude+","+longitude+"?" //(lat,long)last slash is showing the corrdinates for which we need weather data.

    axios.get(url)
        .then((result) => {
            const body = result.data
            if(body.error){
                console.log("No result found")
            }
            else{
                console.log(body.daily.data[0].summary,"It is currently ",body.currently.temperature," degrees out. There is a ",body.currently.precipProbability,"% chances of rain. ")
            }
        })
        .catch((err) => {
            console.log(err)
        });
    }
module.exports=forcast