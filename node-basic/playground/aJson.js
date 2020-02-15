const fs = require("fs")

const dataBuffer = fs.readFileSync("data.json")
const jsonData= dataBuffer.toString();
const parseData = JSON.parse(jsonData)

parseData.age = "2136"
parseData.name = "Abbas Naqvi"

fs.writeFileSync("data.json",JSON.stringify(parseData))