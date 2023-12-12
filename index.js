import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/submit', (req, res) => {
    let date;
    let time;
    let title = req.body.title;
    let comment = req.body.comment;

    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    date = `${day}-${month}-${year}`;

    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    time = `${hour}:${minutes}:${seconds}`;
    
    res.render('index.ejs', {
        date,
        time,
        title,
        comment
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})