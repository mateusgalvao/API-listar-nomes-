const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')


app.use(cors())

app.get('/', async (req, res) => {
    // res é a resposta do axios que estou tirando data de dentro do res 
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    //console.log(data)

    return res.json(data)
})

app.listen('4567', () => {
    console.log('👽 server started 👽 ');

})
