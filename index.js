const express = require('express')
const app = express()

const port = 4567

const dogs = [ 
  { name: "Wawa", breed: "Chihuahua"},
  { name: "Bruno", breed: "Shitzu"},
]

app.get("/", (req, res) => {
  res.json(dogs)
})

app.get("/dogs/:id", (req, res) => {
  console.log(req)
  res.send("what do u want to know about dog ${req.params.id}?")
})


app.listen(port, ()=> {
  console.log(`Listening on port ${port}`)
})

