const express = require('express');
const app = express();

app.set('view engine', 'ejs')
.use(express.static(__dirname + '/public'))
.use('/', require('./routes/route'))
.listen(process.env.PORT||5000, () => {
    console.log("Listening on port 5000")
});