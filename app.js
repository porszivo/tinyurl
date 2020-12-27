const express = require('express')

const app = express();
const tinyurl = require('./routes/tinyurl')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept, Location");
    res.header("Access-Control-Expose-Headers", "*")
    next();
});

module.exports = app

app.use('/url', tinyurl)

app.listen(3000, (err) => {
    if (err) throw err
    console.log('Server running on http://localhost:3000')
})
