#! /usr/bin/env node
const moment = require("moment-timezone")
moment.tz.setDefault('Asia/Kolkata')

let targetTimeZone
let resultTime
if (process.argv.length !== 3) {
    console.log("Useage:node <script-file><timezone>");
    process.exit(1)
} else {
    targetTimeZone = process.argv[2]
}

if (moment.tz.zone(targetTimeZone) != null) {
    resultTime = moment().tz(targetTimeZone).format("hh:mm:ss a")
    return console.log(`The time at ${targetTimeZone} is ${resultTime}`)
}



