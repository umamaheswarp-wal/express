


const got = require('got')
const express = require('express')

const app = express()
const port = 3002

app.get('/', (req,res) => {
    got.get('https://dummy.restapiexample.com/api/v1/employees')
    .then(response => res.send(response.body))
    .catch(response => console.log(response))
})

app.listen(port, console.log("LISENING IN PORT : " + port))


