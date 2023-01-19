const functions = require("firebase-functions");
// build express app host it in cloud function 
const express = require("express")
const cors = require('cors')
const stripe = require('stripe')
(
    'sk_test_51MRgNYEFQAbHNks3myzPzOWn9pNfxogMjzj7qNISJBHh9mvPWiW9gsgR1ZqfX2UbKrHtfnIf5nE1Pq5wY80T3jyD00QoXRzKD1'
)

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin:true}))
app.use(express.json())
// take and send it into Json format

// API routes
app.get('/', (request, response) => 
response.status(200).send('hello'))

// app.get('/amazon', (request, response) => 
// response.status(200).send('hello amazon'))

app.post('/payments/create', async(request, response)=> {
    const total = request.query.total;

    console.log('payment resquest recieved!! for this amoun>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // submits of the currency 
        currency: "usd",
    })
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client.secret,
    })
})

// -listen command
exports.api = functions.https.onRequest(app)