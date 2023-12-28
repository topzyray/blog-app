import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

let status;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs', {
        posts: posts,
    })
})

app.get('/new', (req, res) => {
    res.render('newPost.ejs')
})

app.post('/', (req, res) => {
    
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: new Date().toISOString(),
    }

    try {
        posts.push(newPost);
    } catch (error) {
        console.log(error.message)
    }

    console.log(newPost)
    res.redirect('/')
})

app.patch('/edit', (req, res) => {
    status = "edit"
    res.render("newPost", {
        status,
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

const posts = [
    {
        id: 1,
        title: "My Wife",
        content: "The name of my wife is 'Guess It'. I love her from the bossom of my heart. I pray God bless our marriage with love and gladness",
        author: "T. Taiwo",
        date: "2023-12-28T00:18:00.869Z"
    },
    {
        id: 2,
        title: "Our Life Together",
        content: "Our life together has been a blessing. I could remember the first time I set my eyes on her. She was so cute and lovely. Her sense of humor, love and understanding is top notch.",
        author: "T. Taiwo",
        date: "2023-12-28T00:18:00.869Z"
    },
    {
        id: 3,
        title: "Our Fruits",
        content: "Our God has blessed us with divine fruit from above. He is an handsome guy with God's wisdom.",
        author: "T. Taiwo",
        date: "2023-12-28T00:18:00.869Z"
    }
]