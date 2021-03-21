const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
const User = require('./models/User')
const mongoose = require('mongoose')
const accountSid = 'ACb8f66665b84f6a92ba03144fc9325826';
const authToken = '515e13062f695a6ef1e14cc9534ec432';
const client = require('twilio')(accountSid, authToken);

const axios = require("axios");
const latlngGeocoder = require('./latlngGeocoder')
const convert = require("xml-js");
const cityFinder = require('./cityFinder')

async function getCitiesInZipCode(zipCode) {
    const coordinates = await axios(latlngGeocoder(zipCode))
    const latlng = coordinates.data.results[0].geometry.location
    const listOfCities = await axios(cityFinder(latlng))
    const convertedData = convert.xml2js(listOfCities.data, {
        compact: true,
        spaces: 4
    });
    return convertedData.cities.city.map((data) => {
        return data._attributes.name.toUpperCase()
    });
}

const fromPhone = '+12084949858'

const mongoConnectionString = 'mongodb+srv://pocolypz:XxXcUIp7fl4b4Ojl@cluster0.vdpd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoConnectionString, {
    useNewUrlParser: true
},).then(response => console.log(`VaxFinder server is connected to the DB and running....`))

app.post('/api/adduser', async (req, res) => {

    const phone = req.body.From
    const body = req.body.Body
    console.log(body)

    const existingUser = await User.findOne({phone: phone})

    if (body === "rick") {
        const optOutUser = await User.findOneAndUpdate({
            phone: phone
        }, {optIn: false})
        console.log(optOutUser)
        client.messages.create({body: `Ok! You've been removed from VaxFinder. Reply with your zip code to opt back in. Have a good day!`, from: fromPhone, to: phone})
    } else if (existingUser) {
        if (existingUser.optIn === false) {
            await User.findOneAndUpdate({
                phone: phone
            }, {optIn: true})
            client.messages.create({body: `Ok! You've turned vaccine appointment alerts back on. Reply with "rick" to remove yourself again. Have a nice day!`, from: fromPhone, to: phone})
        } else if (existingUser.optIn === true) {
            client.messages.create({body: `You're already in our system, and receiving vaccine alerts. Reply with "rick" to stop receiving alerts.`, from: fromPhone, to: phone})
        }

    } else if (typeof Number(body) === NaN) {
        client.messages.create({body: `Welcome to VaxFinder! Please reply with your zip code to sign up`, from: fromPhone, to: phone})
    } else if (typeof Number(body) === 'number') {

        const cities = await getCitiesInZipCode(Number(body))
        await User.create({phone: phone, zipCode: body, cities: cities})
        client.messages.create({body: 
        `🚨💉💉💉🚨 
        
Hi, welcome to VaxFinder! you've signed up for COVID-19 vaccine appointment alerts at retail pharmacies near you. I'll check for available appointments near you, and if I find something, I'll send you a text with a link to sign up. I'm pretty new, so know that I might be buggy and you probably shouldn't rely on me, but I'll do my best :)
        
If you got a shot or you'd like to stop receiving alerts, please reply with "rick" at any time. Thanks!`, from: fromPhone, to: phone})
    }


})


app.listen(3000, function () {
    console.log('vaxfinder is awake')
})
