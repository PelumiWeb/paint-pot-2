const express = require('express')
const enforce = require('express-sslify')
 
const app = express()


const port = process.env.PORT || 4000
app.use(enforce.HTTPS({trustProtoHeader: true}))
app.use(express.static('public'))

app.listen(port , () => {
console.log(port)
})

