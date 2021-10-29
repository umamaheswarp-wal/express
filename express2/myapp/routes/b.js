/*const got = require('got');

got('https://dummy.restapiexample.com/api/v1/employees', { json: true }).then(response => {
  console.log(response.body.url);
  console.log(response.body.explanation);
}).catch(error => {
  console.log(error.response.body);
});
*/

const request = require('request')
const express = require('express')

const app = express()
const port = 3004

app.use('/', (req,res) => {
    request.get('https://dummy.restapiexample.com/api/v1/employees',
    {json : true},
    (request,response) => {
        res.send(response.body)
    })
})

app.listen(port, () => console.log("LISENING ON PORT : " + port))





