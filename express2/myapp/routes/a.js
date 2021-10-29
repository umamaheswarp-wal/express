



const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req,res) => {
axios({
    method : 'get',
    url : 'https://dummy.restapiexample.com/api/v1/employees'
})
.then(response => res.send(response.data))

})

app.listen(port, console.log("LISENING IN PORT : " + port))