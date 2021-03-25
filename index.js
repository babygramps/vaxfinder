const mongoose = require('mongoose')
const Users = require('./models/User')
const Testing = require('./models/Testing')
const CVSConfig = require('./CVSConfig')
const axios = require('axios')
const {UserChannelInstance} = require('twilio/lib/rest/chat/v1/service/user/userChannel')
const accountSid = 'ACb8f66665b84f6a92ba03144fc9325826';
const authToken = '515e13062f695a6ef1e14cc9534ec432';
const client = require('twilio')(accountSid, authToken);
const wallgreensCall = require('./walgreensCall')
const latlngGeocoder = require('./latlngGeocoder')

const mongoConnectionString = 'mongodb+srv://pocolypz:XxXcUIp7fl4b4Ojl@cluster0.vdpd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const timeInterval = 1000 * 60 * 60

mongoose.connect(mongoConnectionString, {
    useNewUrlParser: true
},)

const fromPhone = '+12084949858'


async function getCVSCities() {

    const availableCities =[]
    const data = await axios(CVSConfig)
    const CVSCities = data.data.responsePayloadData.data.CA
    CVSCities.filter(city => {
        if (city.status === "Available") {
            availableCities.push(city.city)
        }
    })
    return availableCities
}


async function matchCities() {
    const cvsCities = await getCVSCities()
    const testing = await Testing.find()

    testing.forEach(async user =>  {

        let matchedCities = []

        if (user.optIn === true && Date.now() > user.lastCheck + 3600000) {
            for (i = 0; i < cvsCities.length; i ++) {
                for (j = 0; j < user.cities.length; j ++) {
                    if (user.cities[j] === cvsCities[i]) {
                        let lowercase = cvsCities[i].toLowerCase()
                        let formattedCity = lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
                        matchedCities.push(formattedCity)
                    }
                }
            }
        }

        formattedCitiesWithComma = matchedCities.join(', ')

        const messageBody = `🚨💉💉💉🚨 
        
        There are COVID-19 vaccines available at CVS in ${formattedCitiesWithComma}. Go to https://www.cvs.com/immunizations/covid-19-vaccine to sign up! 
        
        Respond with "rick" if you successfully book an appointment or want to stop notifications. Have a nice day!`

        if (matchedCities.length > 0) {
            // client.messages.create({body: messageBody, from: fromPhone, to: user.phone}).then((message) => console.log(`Nice! There's a shot for ${
            //     user.phone
            // }! Twilio SMS Id: ${
            //     message.sid
            // }`))
            console.log(`Hi ${
                user.phone
            }, ${messageBody}`)
            
          await Testing.findOneAndUpdate({phone: user.phone}, {lastCheck: Date.now(), notified: true})
           
        } 
        else if (user.optIn === false){
            console.log(`User ${user.phone} doesn't want to be bothered right now`)
        }
        else if (user.optIn === true && Date.now() < user.lastCheck + 3600000){
            console.log(`User ${user.phone} has already been notified`)
        }
        else {
            await Testing.findOneAndUpdate({phone: user.phone}, {lastCheck: Date.now()})
            console.log(`There's no shots for ${
                user.phone
            } in zip code: ${
                user.zipCode
            }`)
            await Testing.findOneAndUpdate({phone: user.phone}, {lastCheck: Date.now(), notified: false})
        }
    })


    }


// app.post('/api/trigger', async (req, res) =>{
//     matchCities()
// })

matchCities();
