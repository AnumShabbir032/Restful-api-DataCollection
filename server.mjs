// const express = require('express')
// console.log("Bello world")
import express from "express";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

let users = [];

// Post request
app.post('/user', (req, res) => {
    console.log(req.body);  //cilent data console here

    users.push(req.body); //push user data to user variable 

    res.send('user is created!')
})

// Get request 
app.get('/user', (req, res) => {

    res.send(users) //user get 

    // console.log('here is your user!')
})

// Put request
app.put('/user', (req, res) => {
    res.send('user modified!')
})

// Delete request
app.delete('/user', (req, res) => {
    res.send('user delete!')
})


app.get('/', (req, res) => {
    res.send('Bello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 