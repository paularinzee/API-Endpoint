const express = require('express');

const app = express();

app.get('/',(req, res) =>{
    res.status(200)
    .json({"slackUsername": "Paularinze", "backend": true, "age":30, "bio":" I love solving complex problems." });
} )
const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
    console.log(`App running port on `+ PORT);
});


