const express = require('express');

const app = express();
const path = require('path')
const port = 8080;
let count = 1;

let urlMapper = new Map();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public/JS")));
app.use(express.static(path.join(__dirname, "public/CSS")));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
});

app.post("/url", (req, res)=>{
    let {longURL} = req.body;
    const shortenURL = `shorturlxyz.rf.gd/${count}`;
    urlMapper.set(shortenURL, longURL);
    count++;
    res.send({shortenURL:shortenURL});
});

app.get("/shortURL/:id", (req, res)=>{
    let longURL = urlMapper.get( `http://localhost:8080/shortURL/${req.params.id}`);
    res.redirect(longURL);
});

app.listen(port, ()=>{
    console.log(`app is connected to port ${port}`);
});