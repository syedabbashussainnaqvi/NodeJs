/* Why 2nd timeout is running after printing Stopping?
setTimeout is a basic async function provided by node. Not a function in javascript. It is provided by node to the script and written in C++.
Node is single threaded but its call to async functions uses other threads in C++ behind the scene that allow program to exectute further without wating for it.
Excecution Sequence
Call Stack holds call to all the functions in a sequence.
Node Api all async functions are moved from call stack to node api. 
Event loop looks at call stack and callback queue. If call stack is empty then it will run function from callback queue.
Non of async call going to run untill main function is executed completly. Thats the reason of below exection.
Http Request
*/
console.log("Start")

setTimeout(()=>{
    console.log("2 Sec ")
},2000)

setTimeout(()=>{
    console.log("0 Sec")
},0)

console.log("Stopping")

/**
 * const request = require('request')
 * const url ="https://api.darksky.net/forecast/2b3ea08480213be30e294f56d0e5736e/37.8267,-122.4233" //last slash is showing the corrdinates for which we need weather data.
 *  request({url:url},(error,response)=>{
    const data =JSON.parse(response.body) 
    console.log(data.currently)
})
 */
