const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('public')) // tells express ot look at everything in the public folder

// renders the index.html (homepage)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
