const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


let commentsArray = [
    {
        id: uuid(),
        username: "Ashish",
        comment : "Nice One"
    }, {
        id: uuid(),
        username: "Rajkumar",
        comment : "Nice two"
    }, {
        id: uuid(),
        username: "Rahul rana",
        comment : "Nice three"
    }, {
        id: uuid(),
        username: "Ankit",
        comment : "Nice Four"
    }
]

app.get("/",(req, res) => {
    res.send("connected");

})
// route ==== for displaying all the comments
app.get("/comments", (req, res) => {
    res.render("./comments/index", {commentsArray});
})

app.get("/comments/new", (req,res) => {
    res.render("./comments/new");
})

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    const id = uuid();
    commentsArray.push({ id, username, comment });
    res.redirect("/comments")
});
// show particular comment

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const fComment = commentsArray.find(c => c.id === id)
    res.render('./comments/show',{fComment})
})


app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const fComment = commentsArray.find(c => c.id === id)

    res.render('./comments/edit', { fComment });
})

// UPDATE -Comment ---
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const fComment = commentsArray.find(c => c.id === id)
    const newCommentText = req.body.comment;
    fComment.comment = newCommentText;
    res.redirect("/comments");
})

// DELETE/DESTROY

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments=commentsArray.filter(c => c.id !== id);
    res.redirect("/comments");
})


app.listen(3000, (req,res) => {
    console.log("Server Running at port No 3000...");
})