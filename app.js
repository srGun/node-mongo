require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
app.get('/',(req, res) =>{
    res.send('hello world')

})

app.get('/home',(req,res) =>{
    res.send(`
		<h1 style = "text-align:center; color:red;background-color:black;"> this is a home page</h1>
        
    `)
})

app.listen(port, () =>{
    console.log(`example app listen on port ${port}`)
})