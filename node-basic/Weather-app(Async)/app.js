/** Through axios we dont have to parse the data it do it on its own. Similarly it is a promised based HTTP client for the browser as well as node.js.
 * Writing asynchronous code can get confusing, and Promises are one of several solutions to this problem.  */
const geoCode = require("./geoloc.js")
const forcast = require("./forcast.js")


const address = process.argv[2] //getting input from the user
if(address){
    geoCode(address,(longitude,latitude)=>{
        forcast(longitude,latitude)
    })    
}
else{
    console.log("Please enter the address")
}

