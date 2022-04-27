const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
  //we're setting up an endpoint that sends a file for the website to read and we are smushing two files pathes together
  //__dirname is the name of the folder currently in then the next (../index.html)is the target to hit
})

const port = process.env.PORT || 4005

//the process.env.PORT is from heroku, so when we deploy we will access that port from heroku

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
